module.exports = {
  isAnalyze: process.argv.includes('--analyse'),
  isDev: process.argv.includes('--mode=development'),
  isProd: process.argv.includes('--mode=production'),
}
