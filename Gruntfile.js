module.exports = function(grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON("package.json"),
    connect: {
    server: {
	      options: {
	        port: 8800,
	        hostname: 'localhost',
	        base: '.'
        }
	    }
	  },
    concat : {
      options : {
        separator : ";",
        sourceMap : true,
      },
      dist: {
        src : ["js/app.js","js/**/*.js"],
        dest : "tmp/<%=pkg.name %>.js"
      },
    },
    sass: {     
      dist: {   
        files: {
          'tmp/style.css' : 'css/scss/style.scss' 
        }
      }
    },
    watch: {
	  options: {
	    livereload: true,
	  },
	  html : {
	  	files: ['index.html', 'js/templates/**.html']
	  },
    css : {
      files: ['css/scss/**/*.scss'],
      tasks: ['sass','cssmin'],
    },
    js : {
      files: ['<%= concat.dist.src %>'],
      tasks: ['concat:dist','uglify:dist']
    }
    },
    uglify: {
      options: {
        sourceMap : true,
        sourceMapIncludeSources : true,
        sourceMapIn : '<%= concat.dist.dest %>.map'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      },
    },
    cssmin: {
      options: {
        sourceMap : true,
      },
      target: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'tmp/style.css'
        }
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
        all: ['Gruntfile.js', 'js/**/*.js', ]
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['concat', 'sass','uglify','cssmin','jshint']);
  grunt.registerTask('server', ['connect', 'watch']);
  grunt.registerTask('test', ['jshint']);

};