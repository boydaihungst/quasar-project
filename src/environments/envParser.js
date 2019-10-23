const { config } = require('dotenv');
const parsedEnv = config({ path: './dev.env' }).parsed;

module.exports = function() {
  // Let's stringify our variables
  for (key in parsedEnv) {
    if (typeof parsedEnv[key] === 'string') {
      parsedEnv[key] = JSON.stringify(parsedEnv[key]);
    }
  }
  return parsedEnv;
};
