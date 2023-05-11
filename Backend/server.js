const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = process.env.port || 5000;
const App = express();

App.use(cors({
    origin: '*'
}));
App.use('/api/class',require('./routes/gameRoutes'));
App.listen(port,()=>console.log(`Server running in port ${port}`));