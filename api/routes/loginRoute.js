

import { Router } from 'express';
import { loginController } from '../controllers/loginController.js';

const loginRoute = Router();

// Handle GET request to display login page
loginRoute.get('/login', (req, res) => {
    // Render your login page here (e.g., login.ejs)
    res.render('login');
});

// Handle POST request when the login form is submitted
loginRoute.post('/login', loginController);

export default loginRoute;