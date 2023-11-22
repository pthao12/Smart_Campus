import connection from "../connect/connect"

export const getAllCourse = async (req, res) => {
    try {
        connection.query('SELECT * FROM courses', (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        }
        );
    } catch (error) {
        console.error('Error in getAllCourse:', error);
        res.status(500).send('Internal Server Error');
    }

}

// `courseID` VARCHAR(12) NOT NULL,
// `courseName` VARCHAR(45) NULL,
// `credits` VARCHAR(45) NULL,
// `practice` INT NULL,
// `theory` INT NULL,
export const addNewCourse = async (req, res) => {
    try {
        const { courseID, courseName, credits, practice, theory } = req.body;
        connection.query('INSERT INTO courses SET ?', { courseID, courseName, credits, practice, theory }, (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        }
        );
    } catch (error) {
        console.error('Error in addNewCourse:', error);
        res.status(500).send('Internal Server Error');
    }

}

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        connection.query('DELETE FROM courses WHERE id = ?', [id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
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
        const { courseID, courseName, credits, practice, theory } = req.body;
        connection.query('UPDATE courses SET courseID = ?, courseName = ?, credits = ?, practice = ?, theory = ? WHERE id = ?', [courseID, courseName, credits, practice, theory, id], (error, results) => {
            if (error) throw error;
            res.status(200).json(results);
        }
        );
    } catch (error) {
        console.error('Error in updateCourse:', error);
        res.status(500).send('Internal Server Error');
    }
}