const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('default', () => {
  nodemon({
    exec: 'nuxt',
    watch: 'api',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
  })
});
