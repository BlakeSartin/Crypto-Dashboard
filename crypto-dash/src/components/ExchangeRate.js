const ExchangeRate = ({exchangeAmmount, selectedPrimaryCurrency, selectedSeconderyCurrency}) => {
  return (
    <div className = "exchange-rate">
      <h3>Exchange Rate</h3>
      <h1>{exchangeAmmount}</h1>
      <p>{selectedPrimaryCurrency} to {selectedSeconderyCurrency}</p>
    </div>
  );
}


export default ExchangeRate;