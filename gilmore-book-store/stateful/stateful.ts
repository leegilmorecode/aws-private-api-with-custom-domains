import * as cdk from 'aws-cdk-lib';
import type { Construct } from 'constructs';
// import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class GilmoreBookStoreStatefulStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stateless stack goes here
    // e.g. typically dynamodb tables, ecs clusters etc

    // const table = new dynamodb.Table(this, 'GilmoreBookStoreTable', {
    //   partitionKey: {
    //     name: 'id',
    //     type: dynamodb.AttributeType.STRING,
    //   },
    // });
  }
}
