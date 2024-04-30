const ResumeModel = require('../models/ResumeModel');

exports.generateResume = async (req, res, next) => {
    try {
        const { email, name, skills, education, workExperience } = req.body;

        const newResume = new ResumeModel({
            email: email,
            name: name,
            skills: skills.split(','),
            education: education,
            workExperience: workExperience
        });

        await newResume.save();

        res.status(200).json({ resume: newResume });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
