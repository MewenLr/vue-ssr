module.exports = {
  client: process.argv.includes('--client'),
  server: process.argv.includes('--server'),
  analyze: process.argv.includes('--analyse'),
  dev: process.argv.includes('--mode=development'),
  prod: process.argv.includes('--mode=production'),
}
