import express from 'express'
import upload from '../config/S3'

const router = express.Router();

router.post('/upload', upload.single('file'), (req,res) => {
    console.log('File upaloaded to S3', req.file.location);

    res.json({
        message: "file uploaded successfully",
        file: {
            url: req.file.location,
            key: req.file.key,
            size: req.file.size,
            mimetype: req.file.mimetype,

        }
    })
})
export default router