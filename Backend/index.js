const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const errorHandler = require('./middleware/middleware');


dotEnv.config();
app.use(bodyParser.json());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log(`Database Connected Successfully`);
}).catch((error) => {
    console.log(error);
});

app.use('/user', userRoutes);
app.use('/resume', resumeRoutes);

app.listen(PORT, () => {
    console.log(`Server Running Successfully`);
});

app.get('/', (req, res) => {
    res.send(`Server is running successfully ${PORT}`);
});