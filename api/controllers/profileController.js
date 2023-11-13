export const Profile = async (req, res) => {
    const locals = {
        title: "SmartCampus",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    res.render('profile', locals);

};