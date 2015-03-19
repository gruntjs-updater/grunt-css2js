# grunt-css2js

> css2js grunt plugin

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-es-css2js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-es-css2js');
```

## The "css2js" task

### Usage
In your project's Gruntfile, add a section named `css2js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css2js: {
    buildWithRequirejsWrapper: {
      src: ['test/css/a.css','test/css/b.css'],
      dest: 'tmp/result_requirejs.js',
      wrapper : 'requirejs'
    },
    buildWithCustomWrapper: {
      src: ['test/css/a.css','test/css/b.css'],
      dest: 'tmp/result_custom.js',
      wrapper : function(content){
        return 'hello!!![' + content + ']hello!!!'
      }
    }
  }
});
```