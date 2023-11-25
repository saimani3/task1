const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})
// Routes
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
