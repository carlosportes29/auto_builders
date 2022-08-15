exports.config = {
  output: './output',
  helpers: {
    Appium: {
      platform: 'android',
      app: '/Users/c.albuquerque.portes/challenge-qa-main/challenge-qa.apk',
      desiredCapabilities: {
        appPackage: 'io.platformbuilders.challenge.qa',
        device: ' Pixel 4 API 30',
        plataformVersion: '11'
      }
    }
  },
  include: {
    I: './steps_file.js',
    cadastro_pagePage: './pages/cadastro_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'auto_builders',
  //tests: './*_test.js'
}