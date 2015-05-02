module.exports = {
  all: {
    files: [{
      expand: true,
      cwd: 'src',
      src: ['**','!scss/**','!xcf/**','!*.css.map'],
      dest: 'dist'
    }]
  }
};