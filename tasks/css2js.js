/*
 * grunt-css2js
 * https://github.com/errorstack/grunt-css2js
 *
 * Copyright (c) 2015 Jevon Cao
 * Licensed under the MIT license.
 */

'use strict';

var css2js = require('es-css2js');
var path = require('path');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('css2js', 'css2js grunt plugin', function() {
    var data = this.data;
    css2js({
      path:data.path || path.resolve(),
      src:data.src || '',
      dest:data.dest || '',
      wrapper:data.wrapper
    });
  });
};
