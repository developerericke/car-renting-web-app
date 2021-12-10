const router = require("express").Router();
//data validation
const {body} = require('express-validator');

const{homePage,register,registerPage,login,loginPage,passwordResetLink} = require('../controllers/userController');
<<<<<<< HEAD
=======

>>>>>>> 58eb1182072022b9304d061a8de1f37d0b01f584

const ifNotLoggedin = (req, res, next) => {

    if(!req.session.userID){
        
        return res.redirect('/login');
    }
    next();
}

const ifLoggedin = (req,res,next) => {
    if(req.session.userID){
        return res.redirect('/home');
    }
    next();
}

<<<<<<< HEAD

router.get('/home',ifNotLoggedin, homePage);
=======
const isLoggedIn = (req,res,next) => {
     if(req.session.userID == undefined){
        return res.redirect('/login');
    }
    next()
}

>>>>>>> 58eb1182072022b9304d061a8de1f37d0b01f584

router.get('/home',isLoggedIn, homePage);

router.get("/login", isLoggedIn, loginPage);

router.post("/login",
    [
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    login
);

//getting the registration page
router.get("/signup", isLoggedIn, registerPage);

router.post(
    "/signup",
    
    [
        body("_name", "The name must be of minimum 3 characters length")
            .notEmpty()
            .escape()
            .trim()
            .isLength({ min: 3 }),
        body("_email", "Invalid email address")
            .notEmpty()
            .escape()
            .trim()
            .isEmail(),
        body("_password", "The Password must be of minimum 4 characters length")
            .notEmpty()
            .trim()
            .isLength({ min: 4 }),
    ],
    register
);

router.get('/logout', (req, res, next) => {
    req.session.destroy((err) => {
        next(err);
    });
    res.redirect('/login');
});

router.get('/recover/account', passwordResetLink);



module.exports = router;