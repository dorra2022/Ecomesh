const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import routes
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const gameRoutes = require('./routes/games');
const plantRoutes = require('./routes/plants');
const potRoutes = require('./routes/pots');
const shopRoutes = require('./routes/shop');
const supervisionRoutes = require('./routes/supervision');
const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecomesh-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Route integrations
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/plants', plantRoutes);
app.use('/api/pots', potRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/supervision', supervisionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
