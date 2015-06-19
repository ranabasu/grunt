module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
	  //uglify
	  uglify: {
		  
      build: {
        src: 'source/js/*.js',
        dest: 'js/script.min.js'
      },
		  
	  dev: {
	   options: {
		   beautify: true,
		   mangle: false,
		   compress: false,
		   preserveComments: 'all'
	       },
        src: 'source/js/*.js',
        dest: 'js/script.min.js'
           }
	     },
	  
	    
	  sass:{
	   dev: {
		   options: {
			   outputStyle: 'expanded'
		   },
		files: {
			'css/styles.css' : 'source/scss/mySass.scss'
		}
	   },
	   build:{
	     options: {
		     outputStyle: 'compressed'
		 },
		files: {
			'css/styles.css' : 'source/scss/mySass.scss'
	   
	     }
	  },
	  
	  watch:{
	     js: {
	     files: ['source/js/*.js'],
		 tasks: ['uglify:dev']
  			 },
		 css: {
	     files: ['source/scss/*.scss'],
		 tasks: ['sass:dev']
  			  }	  
    		}
	  }
	  });

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-sass');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
	// Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  // Default task(s).
  grunt.registerTask('default', ['uglify:dev','sass:dev']);
  grunt.registerTask('build', ['uglify:build','sass:build']);

};