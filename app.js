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

app.get('/signin', (request, response) => {
    response.render('signin')
})

app.get('/login', (request, response) => {
    response.render('login')
})

app.get('/logout', (request, response) => {
    response.render('logout')
})

app.get('/play', (request, response) => {
    response.render('play')
})

// APP POST

app.post('/login', (request, response) => {
    response.redirect('/login')
})

app.post('/play', (request, response) => {
    response.redirect('/play')
})
