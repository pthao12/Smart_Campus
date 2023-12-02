import connection from "../connect/connect";

export const getAllCourse = async (req, res) => {
    try {
        connection.query('SELECT * FROM sections', (error, results) => {
            if (error) throw error;
            res.render('portal', { data: results });
            console.log(results);
        }
        );
    } catch (error) {
        console.error('Error in getAllCourse:', error);
        res.status(500).send('Internal Server Error');
    }

}

