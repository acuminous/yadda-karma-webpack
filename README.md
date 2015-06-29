#### Yadda Karma Webpack

A sample project that uses

1. Webpack to build React code written in ES6 styles written in LESS
1. Karma to run the tests
1. Jasmine for test assetions
1. Yadda to define BDD style features and steps for reusable and easily readable tests definitions

Project generated with [generator-react-webpack](https://github.com/newtriks/generator-react-webpack)

###### How it works

- Tests are run by Karma via Webpack as a preprocessor
- Karma does not directly import any test related files and only include the `test/index.js` file which Webpack uses to require all the files
- Webpack serves the feature files without parsing them, which allows us to AJAX get the file contents
- Webpack processes the step/library files allowing us to write the step definitions in ES6 syntax and require application code that were written in ES6

###### Problems

- If the feature files are fetched asynchronously (the default of most AJAX libraries nowadays), the tests will not see any of the files the first time they are run
- If the feature files are fetched synchronously, which is discouraged by current standards and will cause a warning in Chrome (only tested in Chrome), the tests will run as expected, but the "next" function will somehow be undefined in the step/library definition files.
