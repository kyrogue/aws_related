const AWS = require('aws-sdk')
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

exports.startec2 = function(event, context, callback) {
  const listOfEC2 = []

  var params = {
    InstanceIds: [ /* required */
      'instanceid',
      /* more items */
    ]
  };
  ec2.startInstances(params, function(err, data) {
    if (err) console.log(err, JSON.stringify(err.stack)); // an error occurred
    else     console.log(JSON.stringify(data));           // successful response
  });
 };
