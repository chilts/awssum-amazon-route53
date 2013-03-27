var fmt = require('fmt');
var amazonRoute53 = require('../awssum-amazon-route53');

var r53 = new amazonRoute53.Route53({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonRoute53.US_EAST_1
});

r53.ListHostedZones(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
