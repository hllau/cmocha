const co = require('co');
const {
  describe,
  before,
  after,
  test
} = require('mocha');


function _generatorToCallback(generator) {
  return function(done) {
    co(function *() {
      try {
        yield generator();
        done();
      } catch (err) {
        done(err);
      }
    })
  };
}

function cdescribe(description, generator) {
  return describe(description, _generatorToCallback(generator));
}

function cbefore(generator) {
  return before(_generatorToCallback(generator));
}

function cafter(generator) {
  return after(_generatorToCallback(generator));
}

function ctest(description, generator) {
  return test(description, _generatorToCallback(generator));
}


module.exports = {
  cdescribe,
  cbefore,
  cafter,
  ctest
};

