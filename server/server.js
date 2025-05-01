const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json(), express.urlencoded({ extended: true }))

//runs the config file that already connects to mongoDB
require('./config/mongoose.config')

require('./routes/card.routes')(app)
require('./routes/pack.routes')(app)
require('./routes/collection.routes')(app);


app.listen(8000, () => console.log('The Server is running on port 8000'))
