var request = require('axios')

var WebpackFeatures = function(featuresContext) {
    this.each = function(fn) {
        this.list().then(function(files) {
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

        return request.all(pendingRequests).then(request.spread(this.handleResponse))
    }

    this.handleResponse = function() {
        var args = Array.prototype.slice.call(arguments);
        var files = []

        if (typeof args[0] === 'object') {
            files = args.map(function(arg) {
                return arg[0]
            })
        } else {
            files = [args[0]]
        }

        return files
    }
}

module.exports = WebpackFeatures
