exports.homerender = function(req, res) {
    res.render("register");
}

exports.home = function(req, res) {
    res.render("loginpage", {
        msg: "you have successfully logout, enter please re login!!"
    })
}