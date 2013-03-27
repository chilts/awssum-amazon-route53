var fmt = require('fmt');
var amazonRoute53 = require('../awssum-amazon-route53');

var r53 = new amazonRoute53.Route53({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonRoute53.US_EAST_1
});

var args = {
    Name            : 'example.com',
    CallerReference : '8925bfec-6d6e-4a7d-af1d-c8e109962ee6',
    Comment         : 'Created 2013-03-27.',
};

r53.CreateHostedZone(args, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
