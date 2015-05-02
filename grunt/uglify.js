module.exports = {
  target: {
    files: [{
        expand: true,
        cwd: 'dist/js/',
        src: './**/*.js',
        dest: 'dist/js/'
    }]
  }
}