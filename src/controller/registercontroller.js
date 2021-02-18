const modelregister = require('../model/modelregister');
const bcrypt = require('bcrypt');

exports.userRegister = function(req, res) {
    res.render("register");
}

exports.registervalue = async function(req, res) {
    const uname = req.body.username;
    const pwd = req.body.password;

    encrpyt = await bcrypt.hash(req.body.password, 4)
    console.log(encrpyt);

    //console.log(uname);
    //console.log(pwd);
    const a = new modelregister(req.body);
    a.pwd = encrpyt;
    console.log(a);
    modelregister.enterData(a, function(error, result) {
        console.log(result)
        if (result.error) {
            res.render("register", {
                error: result.error.toString()
            });

        } else {
            const uname = req.body.username;
            const pwd = req.body.password;
            console.log(`you have enter username:${uname} and password:${pwd}`);
            res.render("loginpage", {
                user: `welcome ${uname} to the login page!! now you can login!!`,

            })
        }

    })
}