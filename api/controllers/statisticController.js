import connection from "../connect/connect";

export const getStatistic = async (req, res) => {
    // query number of courses, number of students
    let sql = "select count(*) as data from user "
        + "union all select count(*) as data from courses "
        + "union all select count(*) as data from sections "
        + "union all select count(*) as data from takes ";

    connection.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('statistic', {data});
    });
}