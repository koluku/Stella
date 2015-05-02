module.exports = {
  minify: {
    options: {
      banner: '/*! \n * Theme Name: <%=package.name%>\n * Description: <%=package.description%>\n * Author: <%=package.author%>\n * Version: <%=package.version%>\n */'
    },
    files: {
      'dist/style.css': ['dist/style.css']
    }
  }
};