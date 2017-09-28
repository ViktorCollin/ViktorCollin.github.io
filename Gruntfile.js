module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserSync: {
      bsFiles: {
        src : '.'
      },
      options: {
        watchTask: true,
        server: '.'
      }
    },
    postcss: {
      dist: {
        files: [{
          expand: true,
          cwd: 'dev',
          src: ['**/*.css'],
          dest: './',
        }],
      },
      options: {
        sourceMap: true,
        processors: [
          require('autoprefixer')({browsers: ['last 2 versions']}),
        ]
      },
    },

    // // Tasks for JavaScript
    // uglify: {
    //   options: {
    //     sourceMap: true,
    //     report: 'min'
    //   },
    //   main:{
    //     src: [
    //       'dev/js/main.js',
    //     ]
    //     dest: 'main.min.js',
        

    //   }
    // },

    watch: {
      css: {
        files: ['dev/**/*.css'],
        tasks: ['postcss:dist'],
      },
      configFiles: {
        files: [ 'Gruntfile.js', 'package.json' ],
        options: {
          reload: true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');


  grunt.registerTask('default', ['browserSync', 'watch']);

};