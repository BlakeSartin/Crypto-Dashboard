import { useState } from "react";
import axios from "axios";

const Clock = () => {
  const timezones = [
    "est",
    "pst",
    "gmt",
    "utc",
    "ect",
    "eet",
    "art",
    "eat",
    "met",
    "net",
    "plt",
    "ist",
    "bst",
    "vst",
    "ctt",
    "jst",
    "act",
    "aet",
    "sst",
    "nst",
    "mit",
    "hst",
    "ast",
    "mst",
    "cst",
    "iet",
    "prt",
    "cnt",
    "agt",
    "bet",
    "cat",
  ];
  const [selectedTimeZone, setSelectedTimeZone] = useState("utc");
  const [timeResult, setTimeResult] = useState(null);

  const getTime = () => {
    const options = {
      method: "GET",
      url: `https://world-clock.p.rapidapi.com/json/${selectedTimeZone}/now`,
      headers: {
        "X-RapidAPI-Host": "world-clock.p.rapidapi.com",
        "X-RapidAPI-Key": "e6476deb2dmshb2f511ebd65470fp10d0d2jsn7afb221ccb03",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setTimeResult(response.data["currentDateTime"]);
        console.log(timeResult);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="clock">
      <h2>Current Time</h2>
      <div className="select-box">
            <select
              value={selectedTimeZone}
              name="timezone-option-1"
              onChange={(e) => setSelectedTimeZone(e.target.value)}
            >
              {timezones.map((timezone, _index) => (
                <option key={_index}>{timezone}</option>
              ))}
            </select>
      <button className="time-button" onClick={getTime}>
        Get Time!
      </button>
      </div>
      <h1>{timeResult}</h1>
    </div>
  );
};

export default Clock;
