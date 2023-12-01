import connection from '../connect/connect.js';

export const getInstructorContactInfo = async (userName) => {
  try {
    const query =
      'SELECT c.instructorEmail, c.title, c.content ' +
      'FROM contact c ' +
      'JOIN user u ON c.studentID = u.studentID ' +
      'WHERE u.userName = ?';

    const result = await new Promise((resolve, reject) => {
      connection.query(query, [userName], (error, results) => {
        if (error) {
          console.error('Error in query:', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    console.log('Query Result:', result);
    return result;
  } catch (error) {
    console.error('Error in getInstructorContactInfo:', error);
    throw error;
  }
};
