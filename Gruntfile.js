module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				seperator: ';'
			},
			dist: {
				src: ['src/slowscript.js'],
				dest: 'build/<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				mangle: false,
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'build/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'build/'	,
				src: ['slowscript.js','slowscript.min.js'],
				dest: 'test/',
				filter: 'isFile'
			}
		},
		clean: ["build/*"]
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat','uglify','copy']);
};
