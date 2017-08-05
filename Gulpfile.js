var gulp      = require('gulp'),
    webserver = require('gulp-webserver'),
    connect   = require('gulp-connect'),
    stylus    = require('gulp-stylus'),
    nib       = require('nib');

// Servidor web de desarrollo
gulp.task('server', function(){
	gulp.src('./site/')
		.pipe(webserver({
			host		: "0.0.0.0",
			port		: 8080,
			livereload	: true,
			fallback	: 'index.html'
		}));
});


// Compila stylus a css
gulp.task('styles', function () {
  gulp.src('./site/stylus/main.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
    }))
    .pipe(gulp.dest('./site/css/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./site/stylus/*.styl', ['styles']);
})

gulp.task('default', ['styles', 'server', 'watch']);
