import Documents from '../modules/documentModule.js';
import db from '../connect/connect.js';


// GET method
export const getAllDocuments = (req, res) => {
    // Documents.find()
    //     .then(posts => {
    //         return res.json({ success: true, posts }).status(200);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    let sql = "select * from mydb.curriculum";
    db.query(sql, function(err, data){
        console.log(data);
        if(err) throw err;
        console.log(data.length);
        res.render('curriculum', {data});
    });
};

// export const searchDocument = (req, res) => {
//     const { title } = req.query;

//     if (!title) {
//         return res.json({ success: false, message: "Please fill all the fields" }).status(400);
//     }

//     Post.find({ title: { $regex: title, $options: "i" } })
//         .then(posts => {
//             return res.json({ success: true, posts }).status(200);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// };

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
