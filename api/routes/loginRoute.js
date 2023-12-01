

import { Router } from 'express';
import { loginController } from '../controllers/loginController.js';
import profileRoute from './profileRoute.js';

const loginRoute = Router();
loginRoute.get('/login', (req, res) => {
    res.render('login');
});

loginRoute.post('/login', loginController);
loginRoute.use(profileRoute);

export default loginRoute;