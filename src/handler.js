// src/handler.js
const axios = require('axios');
// eslint-disable-next-line no-unused-vars
const careers = require('./career');

// Handler for registering a user (dummy function)
const registerUserHandler = (request, h) => {
    // eslint-disable-next-line no-unused-vars
    const { name, email, password } = request.payload;
    return h.response({ message: 'User registered successfully!' }).code(201);
};

// Handler for login (dummy function)
const loginUserHandler = (request, h) => {
    // eslint-disable-next-line no-unused-vars
    const { email, password } = request.payload;
    return h.response({ message: 'User logged in successfully!' }).code(200);
};

// Handler for getting user profile (dummy data)
const getUserProfileHandler = (request, h) => {
    const { userId } = request.params;
    return h.response({ userId, name: 'Example User', email: 'user@example.com' }).code(200);
};

// Handler for career recommendations
const getCareerRecommendationsHandler = async (request, h) => {
    const { O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude, 
            PerceptualAptitude, AbstractReason, VerbalReasoning } = request.payload;

    try {
        const response = await axios.post('http://localhost:5001/predict', {
            O_score, C_score, E_score, A_score, N_score, NumericalAptitude, SpatialAptitude,
            PerceptualAptitude, AbstractReason, VerbalReasoning
        });
        return h.response(response.data).code(200);
    } catch (error) {
        console.error(error);
        return h.response({ message: 'Prediction failed' }).code(500);
    }
};

module.exports = {
    registerUserHandler,
    loginUserHandler,
    getUserProfileHandler,
    getCareerRecommendationsHandler
};
