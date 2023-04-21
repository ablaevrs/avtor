import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

// Routes
import authRoutes from './routes/auth.js'

dotenv.config()
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)

connectDB()
app.listen(PORT, () => console.log('Server started'))