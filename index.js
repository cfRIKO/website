const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./routes/static'))
app.use('/api', require('./routes/api'))

app.listen(port, () => console.log(`App listenting on Port ${port}`))