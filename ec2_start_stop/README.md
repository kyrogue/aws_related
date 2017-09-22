* README.md - this file
* index.js - this file contains the sample Node.js code for the web service
* template.yaml - this file contains the Serverless Application Model (SAM) used
  by AWS Cloudformation to deploy your application to AWS Lambda and Amazon API
  Gateway.
* template-deploy.yaml - this file contains the deploy code to be run by cloudformation and is the 
  output after running "aws cloudformation package"


1. aws cloudformation package --template-file ./template.yaml --s3-bucket bucket-name --s3-prefix folder-in-bucket --output-template-file template-deploy.yaml

Will output a template-deploy.yaml, which is to be used in step 2.

2. aws cloudformation deploy --template-file ./template-deploy.yaml --stack-name <YOUR STACK NAME>

If faced with a capability issue when deploying, put the --capabilities CAPABILITY_IAM flag at the deploy command.

---
Learn more about Serverless Application Model (SAM) and how it works here:
https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

AWS Lambda Developer Guide:
http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html