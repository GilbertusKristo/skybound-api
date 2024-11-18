// src/routes.js
const {
    registerUserHandler,
    loginUserHandler,
    getUserProfileHandler,
    getCareerRecommendationsHandler
} = require('./handler');

const routes = [
    { method: 'POST', path: '/api/register', handler: registerUserHandler },
    { method: 'POST', path: '/api/login', handler: loginUserHandler },
    { method: 'GET', path: '/api/user/{userId}', handler: getUserProfileHandler },
    { method: 'POST', path: '/api/recommendations', handler: getCareerRecommendationsHandler }
];

module.exports = routes;
