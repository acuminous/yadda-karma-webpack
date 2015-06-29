var request = require('axios')
var $ = require('jquery')

var WebpackFeatures = function(featuresContext) {
    this.each = function(fn) {
        // this.list().then(function() {
        //     var files = arguments[0]
        //     files.forEach(fn)
        // })
        this.list().forEach(fn)
    }

    this.list = function() {
        var pendingRequests = []
        var featureFilenames = featuresContext.keys()
        var files = []

        featureFilenames.forEach(function(f, i) {
            //var req = request.get(featuresContext(f))
            var req = $.ajax({
              async: false,
              url: featuresContext(f),
              success: function(resp) {
                files.push(resp)
              }
            })

            // pendingRequests.push(req)
        })

        // var all = request.all(pendingRequests).then(this.handleResponse)
        // return all
        return files
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
