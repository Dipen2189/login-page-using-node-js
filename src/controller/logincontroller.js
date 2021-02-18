const modellogin = require('../model/modellogin');
const bcrypt = require('bcrypt');
const session = require('express-session')


exports.renderloginpage = function(req, res) {
    req.session.viewcount += 1;
    res.render("loginpage", { viewcount: `you have visited ${req.session.viewcount} many time` });
}

exports.login = async function(req, res) {
    let encrpyt = " "
    const uname = req.body.username
    const password = req.body.password
    console.log(uname);
    console.log(password);

    // encrpyt = await bcrypt.hash(req.body.password, 4)
    //console.log(encrpyt)

    modellogin.selectData(uname, function(error, result) {
        console.log(result);

        if (result == null) {
            res.render("loginpage", {
                error: "Wrong username please re-enter to login!!!"
            })
        } else {
            const uname = result[0].username
            const pwd = result[0].pwd
            console.log(password);
            console.log(pwd);
            bcrypt.compare(password, pwd).then((result) => {
                console.log(result);
                if (result) {
                    console.log(`welcome ${uname} to the home page`)
                    console.log(`your encrypted password is ${pwd}`)
                    res.render("home", {
                        user: `welcome ${uname} to the home page`,
                        pass: `your encrypted password is ${pwd}`
                    });
                } else {
                    res.render("loginpage", {
                        error: "Wrong password please re-enter to login!!!"
                    })
                }
            }).catch((err) => { console.error(err) })

            /*if (a) {
                console.log(`welcome ${uname} to the home page`)
                console.log(`your encrypted password is ${pwd}`)
                res.render("home", {
                    user: `welcome ${uname} to the home page`,
                    pass: `your encrypted password is ${pwd}`
                });
            } else {
                res.render("loginpage", {
                    error: "Wrong password please re-enter to login!!!"
                })
            }*/
        }
    })
}