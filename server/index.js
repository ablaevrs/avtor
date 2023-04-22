import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

// Routes
import authRoutes from './routes/auth.js'
import postRoutes from './routes/post.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/post', postRoutes)

connectDB()
app.listen(PORT, () => console.log('Server started'))