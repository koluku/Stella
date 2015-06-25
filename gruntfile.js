module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.registerTask('default',['compass','browserSync','watch']);
  grunt.registerTask('release',['compass','autoprefixer','clean','copy','uglify']);
};