//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://makvotes:wampet12345@cluster0.jxolkrj.mongodb.net/test';
// const mongoDB = 'mongodb+srv://zac:test1234@cluster0.fcv5s9w.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
module.exports = mongoose;