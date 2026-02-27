const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    rules: { type: String, required: true },
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    category: { type: String, enum: ['plant-care', 'quiz', 'puzzle', 'memory'], required: true },
    playerScores: [{ player: String, score: Number }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Game', gameSchema);