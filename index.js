const express = require('express')
const path = require('path')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const PORT = 5500

// APP LISTEN

app.listen(PORT, () => {
    console.log(`Logged into the port ${PORT}`)
})

// APP GET

app.get('/', (request, response) => {
    response.render('home')
})

// APP POST

app.get('/login', (request, response) => {
    response.send('Login')
})
