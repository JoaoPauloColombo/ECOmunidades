const express = require('express')
const app = express()
const cors = require ('cors')
const path = require ('path')

app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json())

const noticiasRoutes = require('./routes/noticiasRoutes')
app.use('/api/noticias', noticiasRoutes)

app.use('/uploads', express.static(path.join(__dirname, '..', 'public', 'uploads')))

const port = process.env.PORT || 5000
app.listen(port, () =>{
    console.log(`Server Running on port ${port}`)
})