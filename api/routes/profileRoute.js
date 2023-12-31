// profileRoute.js
import { Router } from 'express';
import { getProfileInfo, updateProfileInfo } from '../controllers/profileController';

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
profileRoute.post('/profile/update', async (req, res) => {
    try {
      const { fullName, dateOfBirth, class: userClass,gender,address,email,image } = req.body;
      const loggedInUsername = req.session.userName;
  
      await updateProfileInfo(loggedInUsername, { fullName, dateOfBirth, class: userClass,gender,address,email,image });
  
      // Redirect back to the profile page after updating
      res.redirect('/profile');
    } catch (error) {
      console.error('Error in updating profile:', error);
      res.status(500).send('Internal Server Error');
    }
  });

export default profileRoute;
