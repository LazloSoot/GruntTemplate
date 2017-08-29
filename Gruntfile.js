module.exports = function(grunt) {

    grunt.initConfig({

        watch: {

            options: {

                livereload: 8585

            },

            css: {

                files: ['assets/less/style.less'],

                tasks: ['less', 'autoprefixer', 'csso']

            },

            html: {

                files: ['**/*.html']

            },

            js: {

                files: ['assets/js/**/*.js'],

                tasks: ['uglify']

            }

        },

        less: {

            development: {

                options: {

                    paths: ["assets/less"]

                },

                files: {
                  "dist/css/style.css": "assets/less/style.less"

                }

            }

        },

        autoprefixer: {

            options: {

                browsers: ['last 2 versions', 'ie 9']

            },

            your_target: {

                src: 'dist/css/style.css',

                dest: 'dist/css/style.css'

            }

        },

        csso: {

            compress: {

                options: {

                    report: 'gzip'

                },

                files: {

                    'dist/css/style.min.css': ['dist/css/style.css']

                }

            }

        },

        uglify: {

            options: {

                mangle: false

            },

            my_target: {

                files: {

                    'dist/js/main.min.js': ['assets/js/**/*.js']

                }

            }

        }

    });





    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-csso');

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-autoprefixer');



    grunt.registerTask('default', ['less', 'autoprefixer', 'csso', 'uglify', 'watch']);

};