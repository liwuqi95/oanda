const agent = require('./api/agent');
const instruments_list = ['WTICO_USD'];

let accountID = null;

const main = async () => {
  let response0 = await agent.Account.list();
  accountID = response0.accounts[0].id;

  agent.Trade.list(accountID).then((response) => console.log(response));
  agent.Pricing.pricing(accountID, 'WTICO_USD').then(response => console.log(response));
}

main();