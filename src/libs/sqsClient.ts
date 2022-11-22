import { SQSClient } from '@aws-sdk/client-sqs'

const REGION = 'ap-northeast-1' // Asia Pacific Tokyo
// Create SQS service object.
const sqsClient = new SQSClient({ region: REGION })
export { sqsClient }
