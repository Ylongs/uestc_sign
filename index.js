const { CronJob } = require("cron")

// 每天8点执行 test
new CronJob('0 0 8 */1 * *', function () {
  require('./sign.js')
}, null, true)