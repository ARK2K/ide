const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('File', fileSchema);
