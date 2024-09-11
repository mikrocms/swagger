module.exports = [
  {
    'router': ['default', '/'],
    'handler': {
      '/swagger': {
        'get': require('./ui'),
        'post': require('./ui')
      }
    }
  }
];
