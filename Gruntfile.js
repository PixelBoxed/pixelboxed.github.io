module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'scss/main.scss'
        }        
      }
    },

    jekyll: {
      dist: {
        options: {
          config: '_config.yml'
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'public/index.html': 'public/index.html',
        }
      }
    },

    watch: {
      sass: {
        files: ['scss/**/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['**/*.html', '!public/**/*'],
        tasks: ['build']
      },
      css: {
        files: ['css/**/*.css'],
        tasks: ['build']
      },
      js: {
        files: ['scripts/**/*.js'],
        tasks: ['build']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('build', ['jekyll', 'htmlmin']);
  grunt.registerTask('default', ['watch']);
}