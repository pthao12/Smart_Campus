import { Router } from 'express';
import { getInstructorContactInfo } from '../controllers/contactController';

const contactRoute = Router();

contactRoute.get('/contact', async (req, res) => {
  try {
    const loggedInUsername = req.session.userName;
    const instructorContactInfo = await getInstructorContactInfo(loggedInUsername);
    res.render('contact', { instructorContactInfo });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).send('Internal Server Error');
  }
  
});

export default contactRoute;