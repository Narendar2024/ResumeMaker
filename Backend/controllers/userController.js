const UserModel = require('../models/UserModel');


const userDetails = async (req, res) => {
    try {
        const { email, name, skills, professionalSummary, resumeObjective, education, jobTitle, address, information, workExperience, academicAchievements, certificates, creativeResumeHeaders, professionalProfile, employmentHistory, resumeTitle, awards, careerGoals, educationalBackground, highlight, relevantExperience, linkedinURL, githubURL, emailURL } = req.body;

        // Check if the user already exists
        let user = await UserModel.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user instance
        user = new UserModel({
            email,
            name,
            skills,
            professionalSummary,
            resumeObjective,
            education,
            jobTitle,
            address,
            information,
            workExperience,
            academicAchievements,
            certificates,
            creativeResumeHeaders,
            professionalProfile,
            employmentHistory,
            resumeTitle,
            awards,
            careerGoals,
            educationalBackground,
            highlight,
            relevantExperience,
            linkedinURL,
            githubURL,
            emailURL
        });

        // Save the user to the database
        await user.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = { userDetails };