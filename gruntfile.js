module.exports = function(grunt) {

  require('load-grunt-config')(grunt);

  grunt.registerTask('default',['jade','compass','autoprefixer','browserSync','watch']);
  grunt.registerTask('release',['jade','compass','autoprefixer','clean:all','copy','cssmin','uglify','imagemin','compress']);
};