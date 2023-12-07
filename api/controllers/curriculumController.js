import Documents from '../modules/CurriculumModule.js';
import db from '../connect/connect.js';

export const getAllDocuments = (req, res) => {

    let sql = "select courseID, courseName, status, updateDate, priceEach from mydb.curriculum join mydb.courses using (courseID)";
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

export const searchDocument = async (req, res) => {
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    let sql = "select * from mydb.curriculum where courseID = '" + searchTerm + "'";
    console.log(sql);
    db.query(sql, function(err, data){
        console.log(err, data)
        if(err || data.length == 0) {
            throw err;
        } else {
            //res.json(document);
            res.render('curriculum', {data});
        }
    });
};