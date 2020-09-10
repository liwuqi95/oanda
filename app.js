const agent = require('./api/agent');

let db = {
  'WTICO_USD': {
    bid: null,
    ask: null
  }
};

let accountID = null;

const fetchAccount = async () => {
  let response0 = await agent.Account.list();
  accountID = response0.accounts[0].id;
}


const fetchPrice = async (instrument) => {
  agent.Pricing.pricing(accountID, instrument).then(response => {
    db[instrument].bid = response.prices[0].closeoutBid;
    db[instrument].ask = response.prices[0].closeoutAsk;
  });

  console.log(db);
}

const main = async () => {

  await fetchAccount();

  agent.Trade.list(accountID).then((response) => console.log(response));

  fetchPrice('WTICO_USD');
}

main();