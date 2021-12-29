const router = require("express").Router();
//data validation
const { body } = require("express-validator");

const {
  homePage,
  register,
  registerPage,
  login,
  loginPage,
  passwordResetLink,
  carRent,
  rentPage,
  carAvailable,
  cars,
  carShowCase,
  carFind,
  carEdit,
  carUpdates,
  deleteCar
} = require("../controllers/userController");

const ifNotLoggedin = (req, res, next) => {
  if (!req.session.userID) {
    return res.redirect("/login");
  }
  next();
};

const ifLoggedin = (req, res, next) => {
  if (req.session.userID) {
    return res.redirect("/home");
  }
  next();
};

router.get("/home", ifNotLoggedin, homePage);

router.get("/login", ifLoggedin, loginPage);

router.post(
  "/login",
  ifLoggedin,
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
router.get("/signup", ifLoggedin, registerPage);

router.post(
  "/signup",
  ifLoggedin,
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
router.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    next(err);
  });
  res.redirect("/login");
});

router.get("/recover/account", passwordResetLink);

//getting rent page 
router.get('/rent', ifNotLoggedin, rentPage); 

router.post('/car/rent', ifNotLoggedin, carRent); 

// getting cars

router.get('/cars/updates',ifNotLoggedin,carAvailable);

//front end fetching
router.get('/cars',cars);

router.get('/cars/display',ifNotLoggedin,carShowCase);

//fetching searched car
router.post('/cars/find', carFind);

//editing car
router.get('/cars/edit/:id', carEdit);

//deleting car
router.post('/delete/', deleteCar);

//updating data 
router.post('/cars/edit', carUpdates);

module.exports = router;
