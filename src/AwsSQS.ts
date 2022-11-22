import {
    CreateQueueCommand,
    SendMessageCommand,
    ReceiveMessageCommand,
    GetQueueUrlCommand,
    DeleteQueueCommand
} from '@aws-sdk/client-sqs'
import { sqsClient } from './libs/sqsClient'

export class AwsSQS {}
