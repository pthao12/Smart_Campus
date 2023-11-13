export const Payment = async (req, res) => {
    const locals = {
        title: "SmartCampus",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }
    res.render('payment', locals);

};