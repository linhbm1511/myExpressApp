var Staff = require('../model/indexModel.js');

exports.list_all_staff = (req, res) => {
    Staff.getAllStaff((err, staff) => {
        if (err) res.send(err);
        // console.log(JSON.stringify(staff));
        res.render('index', { title: 'Express' , mystaff: JSON.stringify(staff)});
    })
}