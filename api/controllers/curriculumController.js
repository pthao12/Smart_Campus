import Documents from '../modules/CurriculumModule.js';
import db from '../connect/connect.js';

export const getAllDocuments = (req, res) => {

    let sql = "select * from mydb.curriculum";
    db.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('curriculum', {data});
    });
};

export const getDocumentById = (req, res) => {
    const { id } = req.params;
    let sql = "select * from mydb.curriculum where courseID = '" + id + "'";
    console.log(sql);
    db.query(sql, function(err, document){
        console.log(err, document)
        if(err || document.length == 0) {
            throw err;
        } else {
            res.json(document);
        }
    });
};