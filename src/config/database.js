const mongoose = require('mongoose')
mongoose.Promise = global.Promise

console.log(process.env.DATABASE_PASSWORD)
module.export = mongoose.connect(`mongodb+srv://todo:${process.env.DATABASE_PASSWORD}@cluster0-olr9g.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useUnifiedTopology: true })