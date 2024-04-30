
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        required: true
    },
    education: {
        type: String,
        required: true
    },
    workExperience: {
        type: String,
        required: true
    }
});

const ResumeModel = mongoose.model('Resume', resumeSchema);

module.exports = ResumeModel;
