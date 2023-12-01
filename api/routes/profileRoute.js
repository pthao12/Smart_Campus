// profileRoute.js
import { Router } from 'express';
import { getProfileInfo } from '../controllers/profileController';

const profileRoute = Router();

profileRoute.get('/profile', async (req, res) => {
  try {
    const loggedInUsername = req.session.userName;
    const userProfileInfo = await getProfileInfo(loggedInUsername);
    console.log('User Profile Info:', userProfileInfo);
    res.render('profile', { userProfileInfo });
  } catch (error) {
    console.error('Error in profile route:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default profileRoute;
