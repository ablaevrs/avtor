import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import multer from 'multer'
import connectDB from './config/db.js'

// Routes
import authRoutes from './routes/auth.js'
import postRoutes from './routes/post.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

// create storage for files
const storage = multer.diskStorage({
    destination: (_, __, cd) => {
        cb(null, 'uploads')
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage })

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

// create route for multer
app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.use('/auth', authRoutes)
app.use('/post', postRoutes)

connectDB()
app.listen(PORT, () => console.log('Server started'))