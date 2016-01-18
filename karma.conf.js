// Karma configuration
// Generated on Mon Jan 18 2016 19:21:12 GMT+0100 (CET)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/traceur/bin/traceur-runtime.js',
            'node_modules/traceur/bin/traceur.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',

            {
                pattern: 'node_modules/angular2/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/rxjs/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/systemjs/dist/system-polyfills.js',
                included: false,
                watched: false
            }, {
                pattern: 'app/todo/todo.component.js',
                included: false,
                watched: true
            }, {
                pattern: 'app/todo/todo.component.spec.js',
                included: false,
                watched: true
            },
            'test.main.js'
        ],


        // list of files to exclude
        exclude: ['node_modules/angular2/**/*_spec.js'],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
