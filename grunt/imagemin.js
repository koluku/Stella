module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: 'dist/image/',
      src: ['./**/*.{jpg,gif,png}'],
      dest: 'dist/image/'
    }]
  }
}