# Introduction

A wrapper to use `co` generators in writing mocha tests.

It does not monkey patch or pollute the global namespace, but
provide a new set of testing functions prefixed with `c`.


# Installation

Make sure ES6 destructuring is enabled in your version of `node`.

To install:

    $ npm install --save-dev cmocha


# Usage

    const { cdescribe, cbefore, cafter, ctest }  = require('cmocha');

    cdescribe('A Test Suite', function *() {
    
      cbefore(function *() {
        // setup something here
      });
    
      cafter(function *() {
        // cleanup something here
      });
    
      ctest('should do something', function *() {
        // write your tests here
        assert(false);
      });
    });

