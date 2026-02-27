const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    scientificName: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    vitalNeeds: {
        lighting: { type: String, required: true },
        watering: { type: String, required: true },
        temperature: { type: String, required: true },
        soil: { type: String, required: true },
        fertilizers: { type: String, required: true },
        moisture: { type: String, required: true },
        airHumidity: { type: String, required: true }
    },
    careGuide: { type: String, required: true }
},{ timestamps: true });

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;