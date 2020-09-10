const superagentPromise = require('superagent-promise');
const _superagent = require('superagent');

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://api-fxpractice.oanda.com';

const responseBody = res => res.body;

let token = '4094e0f04271fec246baa1e5f5aa9916-291d69dc1f47d23cf2722ea32f955389';

const tokenPlugin = req => {
  if (token) {
    req.set('Authorization', `Bearer ${token}`);
  }
  req.accept('Content-Type', 'application/json');
};

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url, params) =>
    superagent.get(`${API_ROOT}${url}`, params).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Account = {
  list: () =>
    requests.get('/v3/accounts')
};

const Pricing = {
  pricing: (accountId, instruments, since = '') =>
    requests.get(`/v3/accounts/${accountId}/pricing?instruments=${instruments}&since=${since}`)
};

module.exports = {
  Account, Pricing
}