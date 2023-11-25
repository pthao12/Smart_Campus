import connection from '../connect/connect.js';

export const loginController = async (req, res) => {
    try {
        const { userName, password } = req.body;

        // Now you can use the 'connection' object
        connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [userName, password], (error, results) => {
            if (error) throw error;

            if (results.length > 0) {
                res.redirect('/contact');
            } else {
                res.redirect('/login?error=1');
            }
        });
    } catch (error) {
        console.error('Error in loginController:', error);
        res.status(500).send('Internal Server Error');
    }
};