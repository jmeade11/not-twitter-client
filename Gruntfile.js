'use strict'

// http://ericnish.io/blog/how-to-neatly-separate-grunt-files
// http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

module.exports = function (grunt) {
  require('time-grunt')(grunt)
  require('load-grunt-config')(grunt)
}
