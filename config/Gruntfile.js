module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "../app/app.css": "../app/app.less" // destination file and source file
                }
            }
        },
        //watch: {
        //    styles: {
        //        files: ['**/*.less'], // which files to watch
        //        tasks: ['less'],
        //        options: {
        //            nospawn: true
        //        }
        //    }
        //},
        copy:{
            dist: {
                files: [
                    {src: '../app/modules/**/*.html', dest: '../dist/templates/', expand: true, flatten:true},
                    {src: '../app/index.html', dest: '../dist/index.html'},
                    {src: '../app/src/styles.css', dest: '../dist/styles.css'},
                    {src: '../app/src/dependencies.js', dest: '../dist/dependencies.js'},
                    {src: '../app/src/modules.js', dest: '../dist/modules.js'},
                    {src: '../node_modules/bootstrap/dist/css/bootstrap.css', dest: '../dist/bootstrap.css'}
                ]
            }
        },
        concat: {
            dependencies:{
                src: [
                    '../node_modules/underscore/underscore.js',
                    '../node_modules/jquery/dist/jquery.js',
                    '../node_modules/popper.js/dist/umd/popper.js',
                    '../node_nodules/bootstrap/dist/js/bootstrap.js',
                    '../node_modules/angular/angular.js',
                    '../node_modules/angular-ui-router/release/angular-ui-router.js',
                ],
                dest: '../dist/dependencies.js'
            },
            style: {
                src: [
                    '../app/modules/**/style.css',
                    '../app/app.css'
                ],
                dest: '../dist/styles.css'
            },
            code: {
                src: [
                    '../app.js',
                    '../app/src/*.module.js',
                    '../app/src/*.controller.js',
                    '../app/modules/**/*.module.js',
                    '../app/modules/**/*.js',
                    '../app/modules/**/*.json'
                ],
                dest: '../dist/modules.js'
            }
        }
    });

    grunt.registerTask('default', ['less', 'concat:dependencies', 'concat:code', 'concat:style', 'copy:dist']);
};