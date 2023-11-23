// const Documents = function(document){

//     this.studentID = document.studentID;
//     this.userName = document.userName;
//     this.password = document.password;
// }

// export default Documents;

const Documents = function(document){
    this.courseID = document.courseID;
    this.status = document.status;
    this.content = document.content;
    this.textDescription = document.textDescription;
    this.orderDate = document.orderDate;
    this.priceEach = document.priceEach;
}

export default Documents;