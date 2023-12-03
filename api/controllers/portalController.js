import connection from "../connect/connect";

export const getAllCourse = async (req, res) => {
    try {
        connection.query('SELECT * FROM sections', (error, results) => {
            if (error) throw error;
            res.render('portal', { data: results });
            console.log(results);
        }
        );
    } catch (error) {
        console.error('Error in getAllCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}

function getRegistedCourseTime(studentID, year, semester) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT day, startTime, endTime FROM takes INNER JOIN sections ON takes.courseID = sections.courseID AND takes.sectionID = sections.sectionID WHERE takes.studentID = ? AND takes.year = ? AND takes.semester = ?', [studentID, year, semester], (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    } catch (error) {
        console.error('Error in getRegistedCourseTime:', error);
        return [];
    }
}

function getCourseTime(courseID, sectionID, semester, year) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT day, startTime, endTime FROM sections WHERE courseID = ? AND sectionID = ? AND semester = ? AND year = ?', [courseID, sectionID, semester, year], (error, results) => {
                if (error) throw error;
                resolve(results[0]);
            });
        });
    } catch (error) {
        console.error('Error in getCourseTime:', error);
        return [];
    }
}

// check if time of new added course is conflict with registed course
function checkTimeConflict(studentID, courseID, sectionID, year, semester) {
    // awiat
    try {
        return new Promise(async (resolve, reject) => {
            const registedCourseTime = await getRegistedCourseTime(studentID, year, semester);
            const courseTime = await getCourseTime(courseID, sectionID, semester, year);
            console.log(registedCourseTime);
            console.log(courseTime);
            let conflict = false;
            for (let i = 0; i < registedCourseTime.length; i++) {
                const registedCourse = registedCourseTime[i];
                if (registedCourse.day === courseTime.day) {
                    // (StartA < EndB) && (EndA > StartB)
                    if (registedCourse.startTime < courseTime.endTime && registedCourse.endTime > courseTime.startTime) {
                        conflict = true;
                        break;
                    }
                }
            }
            resolve(conflict);
        });
    } catch (error) {
        console.error('Error in checkTimeConflict:', error);
        return true;
    }
}

// check if student has already registed this course
function checkDuplicate(studentID, courseID) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM takes WHERE studentID = ? AND courseID = ?', [studentID, courseID], (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    } catch (error) {
        console.error('Error in checkDuplicate:', error);
        return true;
    }
}

// get all courseID of course that student has registed then return array of courseID
function getRegistedCourseID(studentID) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT courseID FROM takes WHERE studentID = ?', [studentID], (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    } catch (error) {
        console.error('Error in getRegistedCourseID:', error);
        return [];
    }
}

// Doi lai thanh session
export const regist = async (req, res) => {
    try {
        const studentID = req.body.studentID;
        const courseID = req.body.courseID;
        const sectionID = req.body.sectionID;
        const year = req.body.year;
        const semester = req.body.semester;

        const duplicate = await checkDuplicate(studentID, courseID);
        if (duplicate) {
            res.status(400).send('Duplicate');
            return;
        }

        const timeConflict = await checkTimeConflict(studentID, courseID, sectionID, year, semester);
        if (timeConflict) {
            res.status(400).send('Time Conflict');
            return;
        }

        const prereq = await getPrereq(courseID);
        // console log string of prereq
        console.log(prereq);
        const registedCourseID = await getRegistedCourseID(studentID);
        console.log(registedCourseID);
        let canRegist = true;

        // check if prereq is in registed course
        for (let i = 0; i < prereq.length; i++) {
            const prereqID = prereq[i].prereqID;
            let isRegisted = false;
            for (let j = 0; j < registedCourseID.length; j++) {
                const course = registedCourseID[j];
                if (prereqID === course.courseID) {
                    isRegisted = true;
                    break;
                }
            }
            if (!isRegisted) {
                canRegist = false;
                break;
            }
        }

        if (!canRegist) {
            res.status(400).send('Prereq');
            return;
        }

        connection.query('INSERT INTO takes SET ?', { studentID: studentID, courseID: courseID, sectionID: sectionID, year: year, semester: semester }, (error, results) => {
            if (error) throw error;
            res.status(200).send('OK');
        });
    } catch (error) {
        console.error('Error in regist:', error);
        res.status(500).send('Internal Server Error');
    }
}

function getPrereq(courseID) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT prereqID FROM prereq WHERE courseID = ?', [courseID], (error, results) => {
                if (error) throw error;
                resolve(results);
            });
        });
    } catch (error) {
        console.error('Error in getPrereq:', error);
        return [];
    }
}

function checkPrereq(studentID, prereqID) {
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM takes WHERE studentID = ? AND courseID = ?', [studentID, prereqID], (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    } catch (error) {
        console.error('Error in checkPrereq:', error);
        return true;
    }
}


export const printDebug = async (req, res) => {
    try {
        // const registedCourse = await getRegistedCourseID('22026523');
        // const wantToRegistCourseID = 'bulon';
        // const prereq = await getPrereq(wantToRegistCourseID);
        // console.log(prereq[0]);
        // // res.status(200).send(prereq[0].prereqID);
        // res.status(200).send(checkPrereq('22026523', prereq[0].prereqID));

        // const courseTime = await getRegistedCourseTime('22026523', '2023', '1');
        // console.log(courseTime);
        // res.status(200).send(courseTime);
        // const check = await checkTimeConflict('22026523', 'bulon', '1', '2023', '1');
        // console.log(check);
        // res.status(200).send(check);

        // const courseTime = await getCourseTime('bulon', '1', '1', '2023');
        // console.log(courseTime);
        // res.status(200).send(courseTime);

        // const registedCourseTime = await getRegistedCourseTime('22026523', '2023', '1');
        // console.log(registedCourseTime);
        // res.status(200).send(registedCourseTime);
    } catch (error) {
        console.error('Error in printDebug:', error);
        res.status(500).send('Internal Server Error');
    }
}