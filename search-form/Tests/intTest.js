
// A Protracterized httpGet() promise
function httpGet(siteUrl) {
    var http = require('http');
    var defer = protractor.promise.defer();

    http.get(siteUrl, function(response) {

        var bodyString = '';
        response.setEncoding('utf8');
        response.on("data", function(chunk) {
            bodyString += chunk;
        });
        response.on('end', function() {
            defer.fulfill({
                statusCode: response.statusCode,
                bodyString: bodyString
            });
        });

    }).on('error', function(e) {
        defer.reject("Got http.get error: " + e.message);
    });
    return defer.promise;
}

// Company -> Company Basic Data -> Country
describe('Integration', function () {

it('should return 200 and contain proper body', async function() {
   await httpGet("http://localhost:3000").then(function(result) {
        expect(result.statusCode).toEqual(200);
        expect(result.bodyString).toContain('json');

    })
});

});