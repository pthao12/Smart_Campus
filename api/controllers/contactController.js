export const Contact = async (req, res) => {
    const locals = {
        title: "SmartCampus",
        description: "Sdsfdsf."
    }
    res.render('contact', locals);

};


