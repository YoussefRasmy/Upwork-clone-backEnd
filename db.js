const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DATABASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'up-work'
}).then(() => {
    console.log("connecting to database....")
}).catch((err) => {
    console.log(err)
    process.exit(1)
})
