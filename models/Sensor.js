const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    potReference: {
        type: String,
        required: true
    },
    sensorType: {
        type: String,
        enum: ['temperature', 'humidity', 'moisture', 'light', 'ph'],
        required: true
    },
    readings: [{
        value: {
            type: Number,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }],
    lastReading: {
        value: {
            type: Number,
            required: true
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    }
});

module.exports = mongoose.model('Sensor', sensorSchema);