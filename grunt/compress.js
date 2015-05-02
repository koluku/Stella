module.exports = {
  compress: {
    options: {
      mode: 'gzip'
    },
    files: [{
      expand: true,
      src: 'dist/*.css',
      ext: '.css.gz'
    },
    {
      expand: true,
      src: 'dist/js/**/*.js',
      ext: '.js.gz'
    }]
  }
};