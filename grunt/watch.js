module.exports = {
  jade: {
    files: 'src/jade/**/*.jade',
    tasks: ['jade']
  },
  css: {
    files: 'src/scss/**/*.scss',
    tasks: ['compass','autoprefixer']
  }
};