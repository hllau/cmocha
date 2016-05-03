const co = require('co');
const {
  describe,
  before,
  after,
  test,
  xtest,
} = require('mocha');


function _generatorToCallback(generator) {
  return function(done) {
    const that = this;
    co(function *() {
      try {
        yield generator.bind(that)();
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

function xctest(description, generator) {
  return xtest(description, _generatorToCallback(generator));
}

cdescribe.skip = function(description, generator) {
  return describe.skip(description, _generatorToCallback(generator));
}

cdescribe.only = function(description, generator) {
  return describe.only(description, _generatorToCallback(generator));
}


module.exports = {
  cdescribe,
  cbefore,
  cafter,
  ctest,
  xctest,
};

