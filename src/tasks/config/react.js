/**
 * Precompiles React components from a `.jsx` file to `.js` file.
 * ---------------------------------------------------------------
 */

module.exports = function(gulp, plugins, growl) {
  gulp.task('react:dev', function() {
    return gulp.src(require('../pipeline').reactFilesToInject)
        .pipe(plugins.browserify({debug: true, transform: ['reactify']}))
        .pipe(gulp.dest('assets/js/'))
        .pipe(plugins.if(growl, plugins.notify({ message: 'react dev task complete' })));
  });
};
