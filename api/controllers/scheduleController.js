import db from '../connect/connect.js';

export const getSchedule = (req, res) => {
    let sql = "select c.courseName, concat(s.courseID, ' ', s.sectionID) as class ,  s.semester, s.year, s.day, s.timeStart, s.timeEnd "
            + "from sections s "
            + "join courses c using (courseID);";
    db.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('schedule', {data});
    });
};


