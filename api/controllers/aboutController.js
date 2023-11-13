export const About = async (req, res) => {
    const locals = {
        title: "SmartCampus",
        description: "Sdsfdsf."
    }
    res.render('about', locals);

};


