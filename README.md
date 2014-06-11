NOTE: AwsSum is now deprecated. Please use [aws-sdk](https://www.npmjs.org/package/aws-sdk) instead.

# awssum-amazon-route53 #

This is an ```AwsSum``` plugin!

You'll need to add [awssum-amazon-route53](https://github.com/awssum/awssum-amazon-route53/) to your package.json
dependencies. Both [awssum](https://github.com/awssum/awssum/) and
[awssum-amazon](https://github.com/awssum/awssum-amazon/) are pulled in as peer dependencies.

## Example ##

List all your Hosted Zones:

```
var fmt = require('fmt');
var amazonRoute53 = require('awssum-amazon-route53');

var r53 = new amazonRoute53.Route53({
    'accessKeyId'     : process.env.ACCESS_KEY_ID,
    'secretAccessKey' : process.env.SECRET_ACCESS_KEY,
    'region'          : amazonS3.US_EAST_1
});

r53.ListHostedZones(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

## Operations ##

Each example below implies you have done the initial setup as in the example above.

### CreateHostedZone ###

```
var args = {
    Name            : 'example.com',
    CallerReference : '8925bfec-6d6e-4a7d-af1d-c8e109962ee6',
    Comment         : 'Created 2013-03-27.',
};

r53.CreateHostedZone(args, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

### GetHostedZone ###

```
r53.GetHostedZone({ HostedZoneId : 'Z414BK7QE43147' }, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

### DeleteHostedZone ###

```
r53.DeleteHostedZone({ HostedZoneId : 'Z414BK7QE43147' }, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

### ListHostedZones ###

```
r53.ListHostedZones(function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

### ChangeResourceRecordSets ###

ToDo.

### ListResourceRecordSets ###

```
r53.ListResourceRecordSets({ HostedZoneId : 'Z414BK7QE43147' }, function(err, data) {
    fmt.dump(err, 'err');
    fmt.dump(data, 'data');
});
```

### GetChange ###

ToDo.

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* [Copyright 2011-2013 Apps Attic Ltd.  All rights reserved.](http://appsattic.mit-license.org/2011/)
* [Copyright 2013 Andrew Chilton.  All rights reserved.](http://chilts.mit-license.org/2013/)

(Ends)
