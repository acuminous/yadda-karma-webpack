var request = require('axios')

var WebpackFeatures = function(featuresContext) {
    this.each = function(fn) {
        this.list().then(function() {
            var files = arguments[0]
            files.forEach(fn)
        })
    }

    this.list = function() {
        var pendingRequests = []
        var featureFilenames = featuresContext.keys()

        featureFilenames.forEach(function(f, i) {
            var req = request.get(featuresContext(f))

            pendingRequests.push(req)
        })

        var all = request.all(pendingRequests).then(this.handleResponse)
        return all
    }

    this.handleResponse = function() {
        var args = Array.prototype.slice.call(arguments)
        var responses = args[0]
        var files = responses.map(function(f) {
            return f.data
        })

        return files
    }
}

module.exports = WebpackFeatures
