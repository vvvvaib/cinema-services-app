const publisher = require('@pact-foundation/pact-node')
const path = require('path')

let opts = {
  pactFilesOrDirs: [path.resolve(__dirname, 'contracts')],
  pactBroker: process.env.PACT_BROKER_URL || 'https://limitless-hamlet-75386.herokuapp.com/',
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME || 'admin',
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD || 'pacty123',
  consumerVersion: '1.0.0',
  tags: []
}

publisher.publishPacts(opts)