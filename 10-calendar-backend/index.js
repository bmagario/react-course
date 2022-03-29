const express = require('express');
const cors = require('cors'); 
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Create server
const app = express();

// DB connection 
dbConnection();

//  Listen request
app.listen(process.env.PORT, () => {
	console.log('Server running in port ' + process.env.PORT);
});

// CORS
app.use(cors())

// Body parsing
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/calendar'));

// Serve public folder
app.use(express.static('public'));