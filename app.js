const agent = require('./api/agent');

let accountID = null;


const main = async () => {
  let response = await agent.Account.list();
  accountID = response.data.accounts[0].id;


  agent.Pricing.pricing(accountID, 'EUR_USD').then(response => console.log(response))

}