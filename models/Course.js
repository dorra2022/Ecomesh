const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true },
    difficultyLevel: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
    enrolledUsers: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);