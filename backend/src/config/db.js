const mongoose = require('mongoose');

async function connectDB() {
    try {
        console.log(process.env.MONGODB_URL);
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        if (conn) {
            console.log('Connected Database');
        }
    } catch (error) {
        console.log('Connect Fail!!!!!');
        process.exit(1);
    }
}

module.exports = {connectDB}