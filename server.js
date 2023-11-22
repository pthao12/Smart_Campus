import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
import methodOverride from "method-override";
import expressLayout from "express-ejs-layouts";


import dashboardRoute from "./api/routes/dashboardRoute.js";
import aboutRoute from "./api/routes/aboutRoute.js";
import profileRoute from "./api/routes/profileRoute.js";
import paymentRoute from "./api/routes/paymentRoute.js";
import contactRoute from "./api/routes/contactRoute.js";
import loginRoute from "./api/routes/loginRoute.js";
import statisticRoute from "./api/routes/statisticRoute.js";
import courseRoute from "./api/routes/courseRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

console.log(PORT);

app.use(express.static('public'));
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// Connect DB

// Routes
app.use("/", dashboardRoute);
app.use("/", loginRoute);
app.use("/", contactRoute);
app.use("/about", dashboardRoute);

app.use("/profile", profileRoute);
app.use("/contact", contactRoute);
app.use("/payment", paymentRoute);

app.use("/course", courseRoute); // Regist courses
// app.use("/schedule", scheduleRoute); // Show schedule
// app.use("/portal", portalRoute); // My progress
// app.use("/curriculum", curriculumRoute);
app.use("/statistic", statisticRoute); // Show most registed class, most registed course, most registed teacher, students with most credits

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});