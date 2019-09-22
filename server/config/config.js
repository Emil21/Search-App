const dotenv = require('dotenv');
dotenv.config();
const config = {
    env: process.env.NODE_ENV,
    port: process.env.SERVER_PORT,
    apikey: process.env.GOOGLE_API_KEY,
};

module.exports = config;