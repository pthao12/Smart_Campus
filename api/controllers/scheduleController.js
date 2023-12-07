import db from '../connect/connect.js';

export const getSchedule = (req, res) => {
    let studentID = req.session.studentID;
    let sql = "select c.courseName, concat(s.courseID, ' ', s.sectionID) as class ,  s.semester, s.year, s.day, s.timeStart, s.timeEnd "
            + "from sections s "
            + "join courses c using (courseID)"
            + "join takes t using (courseID, sectionID) where t.studentID = ?;"
    db.query(sql, [studentID], function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('schedule', {data});
    });
};


