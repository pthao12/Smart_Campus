import connection from '../connect/connect.js';

export const getInstructorContactInfo = async (userName) => {
  try {
    const query =
      'SELECT c.instructorEmail, c.title, c.content ' +
      'FROM contact c ' +
      'JOIN user u ON c.studentID = u.studentID ' +
      'WHERE u.userName = ?';

    const result = await connection.query(query, [userName]);

    // Log the query result for debugging
    console.log('Query Result:', result);

    // Return the first result if available, otherwise return null
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error('Error in getInstructorContactInfo:', error);
    throw error;
  }
};