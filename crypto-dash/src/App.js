import News from "./components/News";
import CurrencyConverter from "./components/CurrencyConverter";
import Clock from "./components/Clock";

const App = () => {
  return (
    <div className="app">
      <h1>Crypto DashBoard</h1>
      <div className="app-wrap">
        <CurrencyConverter />
        <News />
        
      </div>
      <Clock/>
    </div>
  );
};

export default App;
