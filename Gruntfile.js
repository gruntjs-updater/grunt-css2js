/*
 * grunt-css2js
 * https://github.com/errorstack/grunt-css2js
 *
 * Copyright (c) 2015 Jevon Cao
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    css2js: {
      defaultWrapper: {
        options:{},
        src: ['test/css/a.css','test/css/b.css'],
        dest: 'tmp/result.js'
      },
      requirejsWrapper: {
        src: ['test/css/a.css','test/css/b.css'],
        dest: 'tmp/result_requirejs_wrapper.js',
        wrapper:'requirejs'
      },
      customWrapper: {
        src: ['test/css/a.css','test/css/b.css'],
        dest: 'tmp/result_custom_wrapper.js',
        wrapper:function(content){
          return '=========' + content + '========='
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'css2js', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
