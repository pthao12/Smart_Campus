import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";
import methodOverride from "method-override";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Connect DB

// Routes
app.use("/", dashboardRoute);
app.use("/login", loginRoute);
app.use("/about", aboutRoute);

app.use("/profile", profileRoute);
app.use("/payment", paymentRoute);
app.use("/contact", contactRoute);
app.use("/course", courseRoute); // Regist courses
app.use("/schedule", scheduleRoute); // Show schedule
app.use("/portal", portalRoute); // My progress
app.use("/curriculum", curriculumRoute);
app.use("/statistic", statisticRoute); // Show most registed class, most registed course, most registed teacher, students with most credits

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});