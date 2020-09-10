const agent = require('./api/agent');

let accountID = null;


const main = async () => {
  let response0 = await agent.Account.list();
  accountID = response0.accounts[0].id;


  agent.Instrument.list().then((response) => console.log(response));
  agent.Order.list().then((response) => console.log(response));
  agent.Pricing.pricing(accountID, 'WTI').then(response => console.log(response));
}

main();