module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Tasks for JavaScript
		uglify: {
			options: {
				sourceMap: true,
				report: 'min'
			},
			main:{
				dest: 'main.min.js',
				src: [
					'dev/js/main.js',
				]

			}
		},
		cssmin: {
			options: {
				sourceMap: true,
				report: 'min'
			},
			styles: {
				dest: 'styles.min.css',
				src: [
					'dev/css/styles.css'
				]
			}
		},

		watch: {
			js: {
				files: ['<%= uglify.main.src %>'],
				tasks: ['js'],
			},
			css: {
				files: ['<%= cssmin.styles.src %>'],
				tasks: ['css'],
			},
			configFiles: {
				files: [ 'Gruntfile.js', 'package.json' ],
				options: {
					reload: true
				}
			},
			livereload: {
		      // Here we watch the files the sass task will compile to
		      // These files are sent to the live reload server after sass compiles to them
		      options: { livereload: true },
		      files: ['<%= cssmin.styles.dest %>', '<%= uglify.main.dest %>', 'index.html', 'musik.html'],
		    },
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.registerTask('default', ['watch']);

	grunt.registerTask('js', ['uglify:main']);
	grunt.registerTask('css', ['cssmin:styles']);

	grunt.registerTask('full', ['css', 'js']);

};