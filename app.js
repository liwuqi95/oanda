const agent = require('./api/agent');

agent.Account.list().then(response => {
  console.log(response)
})