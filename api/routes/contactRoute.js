import express from 'express';
import { getInstructorContactInfo } from '../controllers/contactController';

const router = express.Router();

router.get('/contact', async (req, res) => {
  try {
    const loggedInUsername = req.session.userName;
    const instructorContactInfo = await getInstructorContactInfo(loggedInUsername);
    res.render('contact', { instructorContactInfo });
  } catch (error) {
    console.error('Error in contact route:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;