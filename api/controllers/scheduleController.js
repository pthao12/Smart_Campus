import db from '../connect/connect.js';

export const getSchedule = (req, res) => {
    db.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('curriculum', {data});
    });
};
