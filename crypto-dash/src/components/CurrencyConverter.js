import { useState } from "react";
import ExchangeRate from "./ExchangeRate";
import axios from "axios";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [selectedPrimaryCurrency, setSelectedPrimaryCurrency] = useState("BTC");
  const [selectedSeconderyCurrency, setSelectedSeconderyCurrency] =
    useState("BTC");
  const [ammount, setAmmount] = useState(1);
  const [exchangeAmmount, setExchangeAmmount] = useState(0);
  const [result, setResult] = useState(0);

  const convert = () => {
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: selectedPrimaryCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: selectedSeconderyCurrency,
      },
      headers: {
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_RAPID_API_KEY
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setExchangeAmmount(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            ammount
        );
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  console.log(exchangeAmmount);

  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-ammount-1"
                  value={ammount}
                  onChange={(e) => setAmmount(e.target.value)}
                />
              </td>
              <td>
                <select
                  value={selectedPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setSelectedPrimaryCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondery Currency</td>
              <td>
                <input
                  type="number"
                  name="currency-ammount-2"
                  value={result}
                  disabled={true}
                />
              </td>
              <td>
                <select
                  value={selectedSeconderyCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setSelectedSeconderyCurrency(e.target.value)}
                >
                  {currencies.map((currency, _index) => (
                    <option key={_index}>{currency}</option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button id="convert-button" onClick={convert}>
          Convert
        </button>
      </div>

      <ExchangeRate 
      exchangeAmmount={exchangeAmmount}
      selectedPrimaryCurrency={selectedPrimaryCurrency}
      selectedSeconderyCurrency={selectedSeconderyCurrency}
      />
    </div>
  );
};

export default CurrencyConverter;
