// courseID, courseName, credits, practice, theory
const Course = function(document){
    this.courseID = document.courseID;
    this.courseName = document.courseName;
    this.credits = document.credits;
    this.practice = document.practice;
    this.theory = document.theory;
}

export default Course;