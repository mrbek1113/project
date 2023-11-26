import { config } from 'dotenv'
config()
import express from 'express'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const PORT = process.env.PORT || 3000




app.listen(PORT, () =>
  console.log(
    `Server is running ${process.env.NODE_ENV} mode. host:http://localhost:${PORT}`
  )
)

// MVC = Model View Controller
