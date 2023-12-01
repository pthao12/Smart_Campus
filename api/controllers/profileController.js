import connection from '../connect/connect.js';

export const getProfileInfo = async (userName) => {
  try {
    const query =
      'SELECT p.fullName, p.dateOfBirth, p.class,p.gender,p.address,p.email,p.image ' +
      'FROM profile p ' +
      'JOIN user u ON p.studentID = u.studentID ' +
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
    console.error('Error in getProfileInfo:', error);
    throw error;
  }
};
