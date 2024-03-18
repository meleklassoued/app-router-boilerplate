const component = require('./settings/component/index');

// add here more generators
module.exports = function (plop) {
  plop.setGenerator('component', component);
};
