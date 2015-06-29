var Yadda = require('yadda')
var WebpackFeatures = require('./WebpackFeatures')

Yadda.plugins.jasmine.StepLevelPlugin.init({parser: new Yadda.parsers.FeatureParser()});

var featuresContext = require.context('.', true, /\.feature$/)
var librariesContext = require.context('.', true, /\.library\.js$/)

new WebpackFeatures(featuresContext).each(function(file) {
    featureFiles(file, function(feature) {
        var libraries = librariesContext.keys().map(function(key) {
            return librariesContext(key)
        })
        var yadda = Yadda.createInstance(libraries)

        scenarios(feature.scenarios, function(scenario) {
            steps(scenario.steps, function(step, done) {
                yadda.run(step, done)
            })
        })
    })
})

module.exports = librariesContext
