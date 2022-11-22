import express, { Request, Response } from 'express'
import 'dotenv/config'
import { uploadFile, getImage, delImg } from './AwsS3'

const app = express()

// S3 routes

app.get('/s3', (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Welcome to AWS-S3 Hands On!!!</h1>    
        </div>

        <img src="/s3/image" />
    `)
})

app.get('/s3/delete', async (req: Request, res: Response) => {
    const key = process.env.AWS_FILE_KEY
    if (key) {
        const result = await delImg(key)
        res.send(result)
    } else {
        res.send('failed to get image')
    }
})

app.get('/s3/image', async (req: Request, res: Response) => {
    const key = process.env.AWS_FILE_KEY
    if (key) {
        const readStream = await getImage(key)
        readStream.pipe(res)
    } else {
        res.send('failed to get image')
    }
})

app.get('/s3/upload', async (req: Request, res: Response) => {
    console.log('Uploading an image to AWS S3...')

    const result = await uploadFile()
    console.log('upload result -->', result)

    res.send(result)
})

// SQS routes

app.listen(3000, () => {
    console.log('listeing on port 3000')
})
