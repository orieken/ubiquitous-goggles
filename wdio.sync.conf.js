exports.config = {
  specs: [
    './test/**/*.test.js',
  ],
  exclude: [
    // 'path/to/excluded/files'
  ],
  include: [
      './test/page-objects/**/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    path: 'http://localhost:4444/wd/hub'
  }],
  sync: true,
  logLevel: 'error',
  coloredLogs: true,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    reporters: ['spec'],
  },
};