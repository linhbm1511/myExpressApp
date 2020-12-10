'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Ekattor2'
})

connection.connect((err) => {
    if (err) throw err;
});

var Staff = (staff) => {
    this.id = staff.id;
    this.name = staff.name;
}
Staff.getAllStaff = (result) => {
    connection.query('SELECT * FROM staff LIMIT 5', (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            // console.log('staff: ', res);
            result(null, res);
        }
    })
}
module.exports = Staff;