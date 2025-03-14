const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/farmDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define schema and model
const cropSchema = new mongoose.Schema({
    crop_id: String,
    crop_type: String,
    harvest_date: Date,
    processing: {
        batch_id: String,
        process_date: Date,
        processing_details: String,
        distribution: {
            route_id: String,
            distribution_date: Date,
            distributor_name: String,
            route: String,
            consumer: {
                consumer_id: String,
                order_id: String,
                delivery_date: Date,
                feedback: String
            }
        }
    }
});

const farmSchema = new mongoose.Schema({
    farm_id: String,
    farm_name: String,
    location: String,
    farmer_contact: String,
    crops: [cropSchema]
});

const Farm = mongoose.model('Farm', farmSchema);

// GET route to fetch all farms
app.get('/farms', async (req, res) => {
    try {
        const farms = await Farm.find();
        res.json(farms);
    } catch (error) {
        res.status(500).send(error);
    }
});

// POST route to create a new farm
app.post('/farms', async (req, res) => {
    const newFarm = new Farm(req.body);
    try {
        const savedFarm = await newFarm.save();
        res.status(201).json(savedFarm);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET a specific farm by farm_id
app.get('/farms/:farmId', async (req, res) => {
    try {
        const farm = await Farm.findOne({ farm_id: req.params.farmId });
        if (!farm) {
            return res.status(404).send('Farm not found');
        }
        res.status(200).json(farm);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET crops by farm_id
app.get('/farms/:farmId/crops', async (req, res) => {
    try {
        const farm = await Farm.findOne({ farm_id: req.params.farmId });
        if (!farm) {
            return res.status(404).send('Farm not found');
        }
        res.status(200).json(farm.crops);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET a specific crop by farm_id and crop_id
app.get('/farms/:farmId/crops/:cropId', async (req, res) => {
    try {
        const farm = await Farm.findOne({ farm_id: req.params.farmId });
        if (!farm) {
            return res.status(404).send('Farm not found');
        }

        const crop = farm.crops.find(c => c.crop_id === req.params.cropId);
        if (!crop) {
            return res.status(404).send('Crop not found');
        }

        res.status(200).json(crop);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the Farm model
module.exports = { Farm };
