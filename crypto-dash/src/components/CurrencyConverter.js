import { useState } from 'react'
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [selectedPrimaryCurrency, setSelectedPrimaryCurrency] = useState("BTC")
  const [selectedSeconderyCurrency, setSelectedSeconderyCurrency] = useState("BTC")


  return (
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input type="number" name="currency-ammount-1" value={""} />
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
                <input type="number" name="currency-ammount-2" value={""} />
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
      </div>

      <ExchangeRate />
    </div>
  );
};

export default CurrencyConverter;
