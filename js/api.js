// Function to fetch live data from the CoinAPI
async function fetchCoinData() {
    const apiKey = 'B338A692-2294-42E6-ABA8-9FE568B8BCD3'; 
    const apiUrl = 'https://rest.coinapi.io/v1/exchangerate'; 

    try {
        
        const url = `${apiUrl}/BTC/USD,EOS/USD,ETH/USD?apikey=${apiKey}`;

        
        const response = await fetch(url);

        
        const data = await response.json();

        
        updateCoinValues(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


function updateCoinValues(data) {

    const bitcoinValue = document.getElementById('bitcoin-value');
    bitcoinValue.textContent = data.find(coin => coin.asset_id_base === 'BTC').rate.toFixed(2);


    const eosValue = document.getElementById('eos-value');
    eosValue.textContent = data.find(coin => coin.asset_id_base === 'EOS').rate.toFixed(2);


    const ethValue = document.getElementById('eth-value');
    ethValue.textContent = data.find(coin => coin.asset_id_base === 'ETH').rate.toFixed(2);

}


setInterval(fetchCoinData, 60000); 
