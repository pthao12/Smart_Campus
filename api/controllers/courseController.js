import e from "express";
import connection from "../connect/connect";
import Course from "../modules/CourseModule";

export const getAllCourse = async (req, res) => {
    try {
        connection.query('SELECT * FROM courses', (error, results) => {
            if (error) throw error;
            res.render('course', { data: results });
        }
        );
    } catch (error) {
        console.error('Error in getAllCourse:', error);
        res.status(500).send('Internal Server Error');
    }

}


export const addCourse = async (req, res) => {
    try {
        const {courseID, courseName, credits, practice, theory } = req.body;
        connection.query('INSERT INTO courses SET ?', {courseID, courseName, credits, practice, theory }, (error, results) => {
            if (error) throw error;
            res.redirect('/course');
        }
        );
    } catch (error) {
        
        console.error('Error in addCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        connection.query('DELETE FROM courses WHERE courseId = ?', [id], (error, results) => {
            if (error) throw error;
            res.redirect('/course');
        }
        );
    } catch (error) {
        console.error('Error in deleteCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { courseName, credits, practice, theory } = req.body;
        connection.query('UPDATE courses SET courseName = ?, credits = ?, practice = ?, theory = ? WHERE courseId = ?', [courseName, credits, practice, theory, id], (error, results) => {
            if (error) throw error;
            res.redirect('/course');
        }
        );
    } catch (error) {
        console.error('Error in updateCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}