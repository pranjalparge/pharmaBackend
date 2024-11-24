const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth_routes');
const graphRoutes = require('./routes/graph_routes');
var cors = require('cors');
const { protect } = require('./auth_middleware');

dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', graphRoutes);


module.exports = app;