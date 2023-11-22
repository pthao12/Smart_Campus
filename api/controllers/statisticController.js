import connection, { connect } from '../connect/connect.js';

export const getNumberStudent = async (req, res) => {
    try {
        connection.query('SELECT COUNT(*) AS numberStudent FROM user', (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        }
        );

    }
    catch (error) {
        console.error('Error in getNumberStudent:', error);
        res.status(500).send('Internal Server Error');
    }
};

export const getNumberCourse = async (req, res) => {
    try {
        connection.query('SELECT COUNT(*) AS numberCourse FROM course', (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        }
        );

    }
    catch (error) {
        console.error('Error in getNumberCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const Statistic = async (req, res) => {
    try {
        const locals = {
            title: "SmartCampus",
            description: "Simple Blog created with NodeJs, Express & MongoDb."
        }
        const numberStudent = await getNumberStudent();
        const numberCourse = await getNumberCourse();
        locals.numberStudent = numberStudent[0].numberStudent;
        locals.numberCourse = numberCourse[0].numberCourse;
        res.render('statistic', locals);
    } catch (error) {
        console.error('Error in Statistic:', error);
        res.status(500).send('Internal Server Error');
    }
}

// export const loginController = async (req, res) => {
//     try {
//         const { userName, password } = req.body;

//         // Now you can use the 'connection' object
//         connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [userName, password], (error, results) => {
//             if (error) throw error;

//             if (results.length > 0) {
//                 res.redirect('/about');
//             } else {
//                 res.redirect('/login?error=1');
//             }
//         });
//     } catch (error) {
//         console.error('Error in loginController:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// export const Statistic = async (req, res) => {
//     try {
//         const locals = {
//             title: "SmartCampus",
//             description: "Simple Blog created with NodeJs, Express & MongoDb."
//         }
//         const numberStudent = await getNumberStudent();
//         locals.numberStudent = numberStudent[0].numberStudent;
//         res.render('statistic', locals);
//     } catch (error) {
//         console.error('Error in Statistic:', error);
//         res.status(500).send('Internal Server Error');
//     }
// };