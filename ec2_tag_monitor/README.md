1.  aws cloudformation create-stack --stack-name teststack --template-body file://tag_monitor.yaml --tags Key=Environment,Value=dev Key=User,Value=Finance
2. aws cloudformation update-stack can be used to update the stack, importantly need to resupply parameters, if using managment console, it will reuse.
---
AWS does not 'AWS CloudFormation does not provide any synchronization or serialization across the Amazon EC2 instances in an Auto Scaling group.'

To avoid these issues, consider forcing a rolling update on your instances in the Auto Scaling group. For more information, see UpdatePolicy. 