// import { Router } from "express";
// import {About} from "../controllers/aboutController.js";
// import{Dashboard} from "../controllers/dashboardController.js"
// import{Profile} from "../controllers/profileController.js"
// import { Payment } from "../controllers/paymentController.js";
// import { Login } from "../controllers/loginController.js";

// const loginRoute = Router();
// loginRoute.get("/about", About);
// loginRoute.get("/dashboard", Dashboard);
// loginRoute.get("/profile", Profile);
// loginRoute.get("/payment",Payment);
// loginRoute.get("/login",Login);
// export default loginRoute;


// import { Router } from "express";
// import { getAllDocuments, getDocumentById} from "../controllers/loginController.js";

// const loginRoute = Router();

// // GET
// loginRoute.get("/", getAllDocuments);
// //loginRoute.get("/search", searchDocument);
// loginRoute.get("/:id", getDocumentById);

// export default loginRoute;

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