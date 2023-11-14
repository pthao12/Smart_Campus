import { connect } from '../connect/connect.js';
export const getInstructorContactInfo = async (studentUsername) => {
  try {

    const db = await connect();
    const query = `
      SELECT c.instructorEmail, c.title, c.content
      FROM contact c
      JOIN user u ON c.studentID = u.studentID
      WHERE u.userName = ?
    `;
    const results = await db.query(query, [studentUsername]);
    await db.close();
    return results;

    
  } catch (error) {
    // Handle errors
    console.error('Error in getInstructorContactInfo:', error);
    throw error;
  }
};
