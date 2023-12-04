import db from '../connect/connect.js';

export const getSchedule = (req, res) => {
    let sql = "select concat(courseID, ' ', sectionID) as class ,  semester, year, day, timeStart, timeEnd from sections;";
    db.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('schedule', {data});
    });
};


