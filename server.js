const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const weather = require('./routes/weather');
const morgan = require('morgan');
const app=express();

app.use(express.json());
app.use(morgan('dev'))
app.use(cors());
// Mount routers
app.get('/', (req,res)=> res.send('API running'));
app.use('/api/v1/weather', weather);

const PORT = 5000;

const server = app.listen(PORT,console.log(`server running on port ${PORT}` ));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    // server.close(() => process.exit(1));
  });