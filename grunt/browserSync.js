module.exports = {
  bsFiles: {
    src : [
      'src/*.html',
      'src/*.css',
      'src/js/*.js'
    ]
  },
  options: {
    watchTask: true,
    server: {
      baseDir: "src/"
    }
  }
}