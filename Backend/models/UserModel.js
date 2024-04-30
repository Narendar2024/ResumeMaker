const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String]
    },
    professionalSummary: {
        type: String
    },
    resumeObjective: {
        type: String
    },
    education: {
        type: String
    },
    jobTitle: {
        type: String
    },
    address: {
        type: String
    },
    information: {
        type: String
    },
    workExperience: {
        type: String
    },
    academicAchievements: {
        type: String
    },
    certificates: {
        type: String
    },
    creativeResumeHeaders: {
        type: String
    },
    professionalProfile: {
        type: String
    },
    employmentHistory: {
        type: String
    },
    resumeTitle: {
        type: String
    },
    awards: {
        type: String
    },
    careerGoals: {
        type: String
    },
    educationalBackground: {
        type: String
    },
    highlight: {
        type: String
    },
    relevantExperience: {
        type: String
    },
    linkedinURL: {
        type: String
    },
    githubURL: {
        type: String
    },
    emailURL: {
        type: String
    }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
