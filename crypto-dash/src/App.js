import News from "./components/News";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  return (
    <div className="app">
      <CurrencyConverter />
      <News />
    </div>
  );
}

export default App;
