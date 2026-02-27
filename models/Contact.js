const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    category: { 
        type: String,
        enum: ['support', 'feedback', 'bug-report', 'feature-request'],
        required: true 
    },
    status: { type: String, default: 'pending' },
    adminResponse: { type: String }
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;