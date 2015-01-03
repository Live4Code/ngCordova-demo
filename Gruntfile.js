/* global module:true
 *
 * Gruntfile.js
 * npm install -g grunt-cli
 * npm install grunt-contrib-less grunt-contrib-watch grunt-contrib-connect --save-dev
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: '8000',
          base: 'www'
        }
      }
    },

    watch: {
      src: {
        files: ['www/**/*'],
        options: { livereload: true }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Run grunt server to get going
  grunt.registerTask('serve', [
    'connect',
    'watch'
  ]);
};
