import * as cdk from 'aws-cdk-lib';
import type { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class GilmoreBookStoreStatelessStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stateless stack goes here
    // e.g. typically lambdas, step functions etc

    // example resource
    // const queue = new sqs.Queue(this, 'GilmoreBookStoreQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
