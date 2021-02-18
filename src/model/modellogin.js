const db = require('../../config/dbconfig')

const loginData = function(fetchData) {
    this.username = fetchData.username;
    this.pwd = fetchData.pwd;
}

loginData.selectData = function(data, result) {
    console.log(data)
        //console.log(encrypt)

    let sql = 'SELECT * FROM login WHERE username = ?'
    db.query(sql, data, (err, res) => {
        console.log(res.length);
        if (res.length == 0) {
            result(err, null);
        } else {
            if (err) {
                console.log("Error while fetching the values from database")
                result(err, null)
            } else {
                console.log(res)
                result(null, res)
            }

        }

    })
}


module.exports = loginData