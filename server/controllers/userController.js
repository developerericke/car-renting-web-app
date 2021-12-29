require('dotenv').config();
//validation of data details
const {validationResult} = require('express-validator');
//for encrypting db password
const bcrypt = require('bcryptjs');
//connection with the db
const db = require('../utils/dbConnection');


const url_token = require('base64url');
const nodemailer = require('nodemailer');
const moment = require('moment');


let email_transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: process.env.EMAIL_PORT, //587,25
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

function email_sender_is_active(){

    email_transport.verify(function (error, success) {
        if (error) {

          console.log(error)  


          return false;
        } else {
          return true;
        }
      });
}

// Home Page
exports.homePage = async (req, res, next) => {
    const [row] = await db.execute("SELECT * FROM `T_Users` WHERE `id`=?", [req.session.userID]);

    if (row.length !== 1) {
        return res.redirect('/logout');
    }

    res.render('home', {
        user: row[0]
    });
}

// Register Page
exports.registerPage = (req, res, next) => {
    res.render("register");
};

// User Registration
exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    const { body } = req;

    if (!errors.isEmpty()) {
        return res.render('register', {
            error: errors.array()[0].msg
        });
    }
    try {
        const [row] = await db.execute(
            "SELECT * FROM `T_Users` WHERE `User_email`=?",
            [body._email],
        );

        if (row.length >= 1) {
            return res.render('register', {
                error: 'This email already in use.'
            });
        }
        if(body._password == body._confirm_password){
        const hashPass = await bcrypt.hash(body._password, 12);

        const [rows] = await db.execute(
            "INSERT INTO `T_Users`(`User_name`,`User_email`,`User_password`) VALUES(?,?,?)",
            [body._name, body._email, hashPass]
        );

        if (rows.affectedRows !== 1) {
            return res.render('register', {
                error: 'Your registration has failed.'
            });
        }
        
        res.render("register", {
            msg: 'You have successfully registered.'
        });
    }else{
        res.render("register",{
            msg: 'Passwords do not match.'
        });
    }
    } catch (e) {
        next(e);
    }
};

// Login Page rendering  
exports.loginPage = (req, res, next) => {
    res.render("login");
};

// Login User
exports.login = async (req, res, next) => {

    const errors = validationResult(req);
    const { body } = req;
    

    if (!errors.isEmpty()) {
        return res.render('login', {
            error: errors.array()[0].msg
        });
    }

    try {

        const [row] = await db.execute('SELECT * FROM `T_Users` WHERE `User_email`=?', [body._email]);

        if (row.length != 1) {
            return res.render('login', {
                error: 'Invalid email address.'
            });
        }

        const checkPass = await bcrypt.compare(body._password, row[0].User_password);

        if (checkPass === true) {
            req.session.userID = row[0].id;
            return res.redirect('/home');
        }

        res.render('login', {
            error: 'Invalid Password.'
        });
    }
    catch (e) {
        next(e);
    }

}


//reset password
exports.passwordResetLink = async (req, res, next) => {
      
    const { query } = req;
   

    sql = "SELECT * FROM `T_Users` WHERE `User_email`=?";

    const [row] = await db.execute(sql,[query.email]);
   
    
    if (row.length !== 1) {
        res.status(400).json({"message": "Invalid email address."});
    }else{
         //Send token to email for that user and add to database
         //get user email and date requested to generate base64url from
         let userEmail = row[0].User_email;
         let date_requested = new Date().toLocaleTimeString();
         generated_token = url_token(userEmail+date_requested);
         
         //try and send to email,if succeeds, add to database
         if (email_sender_is_active() == false){

             console.log("mailserver off")
               res.status(500).json({"message": "Internal server error."});
         }else{
      
             email_transport.sendMail({
                from: "developer.ericke@gmail.com",

                to: "wilsonkaroki6205@gmail.com",
                to: "nderituericke@gmail.com",
                subject: "Account Action",
                //text: "Developer test ",
                html: "<h3 style='text-decoration:underline;font-weight:bold;text-align:center'>Password Reset</h3> <p>Click on the link below to reset your password.</p><br><a ' href='http://localhost:5000/reset-password?token="+generated_token+"'>Reset Password</a> <br> <p>This link will expire in 24 hours.</p>"

             }),(err,info)=>{

                 if (err) return  res.status(500).json({"message": "Internal server error."});
                 if(info.accepted.length > 0){
                          //add token to database
                          sql_insert = "INSERT INTO `T_action_tokens` (`User_email`,`Token_type`,`Token`,`Token_expiry`) VALUES(?,?,?,?)";

                         const token_expiry = moment().add(1, 'days').format('YYYY-MM-DD HH:mm:ss')  

                         console.log(token_expiry)
                            
                            db.execute(sql_insert,[userEmail,"reset",generated_token,token_expiry])
                           .then((dbres)=>{
                               console.log(dbres[0].affectedRows)
                               if (dbres[0].affectedRows !== 1) {
                                console.log(dbres[0].affectedRows)
                     
                            
                            db.execute(sql_insert,[userEmail,"reset",generated_token,token_expiry])
                           .then((dbres)=>{
                               if (dbres.affectedRows !== 1) {
                                res.status(500).json({"message": "Internal server error."});
                               }else{ 
                                res.status(200).json({"message": "Password reset link sent to your email."});
                               }
                                 
                             }).catch((err)=>{

                                 console.log(err)
                          
                                 res.status(500).json({"message": "Internal server error."});
                             })                         

                 }else{
                    res.status(500).json({"message": "Internal server error."});
                 }

             })

         }

        
    }
    }
    }
 
}

exports.rentPage= (req, res,next) => {
    res.render('Rent');
   };

//Renting a car saving details to db 
exports.carRent = (req, res) => {
    message = '';
    if(req.method == "POST"){
       const post  = req.body;
       const name= post.car_name;
       const category= post.category;
       const fuel= post.car_fuel;
       const expense= post.cost;
       const seats= post.seat_no;

       if (!req.files || Object.keys(req.files).length === 0)
            return res.status(400).send('No files were uploaded.');
  
         const file = req.files.uploaded_image;
         const img_name=file.name;
  
          if(file.mimetype == "image/jpeg" || file.mimetype == "image/png"|| file.mimetype == "image/gif" ){
                                  
               file.mv('public/images/uploaded_images/'+file.name, function(err) {
                              
                   if (err) return res.status(500).send(err);

                         const sql = "INSERT INTO `cars`(`car_name`,`category`,`fuel_type`,`price`, `seat_capacity` ,`image`) VALUES ('" + name + "','" + category + "','" + fuel + "','" + expense + "','" + seats + "','" + img_name + "')";
  
                            db.query(sql).then(result=>{
                                res.redirect('/home');
                            }).catch((err)=>{
                                console.log(err)
                                res.status(500).send("err") //render('Rent.ejs',{error: err});
                            })
                        })          
                        
           } else {
             message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
             res.render('Rent.ejs',{message: message});
           }
    } else {
       res.render('Rent');
    }  
};

// Fetching data from mysql to the dasboard with updates
exports.carAvailable = (req,res)=>{
    const sql = 'SELECT * FROM cars';
    db.query(sql).then(result=>{
        res.render('CarUpdate',{title:'cars',userData:result[0]});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("err") //render('Rent.ejs',{error: err});
    });
}

//fetching to show available cars in the dashboard
exports.carShowCase = (req,res)=>{
    const sql = 'SELECT * FROM cars WHERE status = "active"';
    db.query(sql).then(result=>{
        res.render('Cars',{title:'cars',userData:result[0]});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("err") //render('Rent.ejs',{error: err});
    });
}

//fetching data for the front end (ReactJs)
exports.cars = (req,res)=>{
    const sql = 'SELECT * FROM cars WHERE status = "active"';
   db.query(sql).then(result=>{
       res.json({cars:result[0]});
   }).catch(err=>{
       res.status(401).send(err);
   })
}

//finding car by category using search
exports.carFind = (req,res)=>{
    const searchCar = req.body.search;
    db.query('SELECT * FROM cars WHERE category LIKE ?', ['%' + searchCar + '%'],).
    then(result=>{
        res.render('Cars',{title:'cars',userData:result[0]});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("err") //render('Rent.ejs',{error: err});
    });
}

//rendering the update page
exports.carEdit = (req,res) =>{
    const sql = 'SELECT * FROM cars WHERE id = ?';
    db.query(sql,[req.params.id]).
    then(result=>{
        console.log(result[0][0])
        res.render('Edit',{title:'cars',userData:result[0][0]});
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("err") //render('Rent.ejs',{error: err});
    });  
}
//updating inserted car details
exports.carUpdates = (req,res)=>{
    message = '';
    if(req.method == "POST"){
       const post  = req.body;
       const name= post.car_name;
       const category= post.category;
       const fuel= post.car_fuel;
       const expense= post.cost;
       const seats= post.seat_no;
       const id = post.id;
       let file_saved = false
       img_name=''//ile.name;

       if (req.files){

         const file = req.files.uploaded_image;
         img_name=file.name;
  
          if(file.mimetype == "image/jpeg" || file.mimetype == "image/png"|| file.mimetype == "image/gif" ){
                                  
               file.mv('public/images/uploaded_images/'+file.name, function(err) {
                              
                   if (err) return res.status(500).send(err);
                   console.log("image saved")
                   file_saved = true
                   updateImage(file_saved)
                 })          
                        
           } else {
             message = "This format is not allowed , please upload file with '.png','.gif','.jpg'";
             
             res.render('Rent.ejs',{message: message});
           }

       }else{
        updateImage(file_saved)
       } 
         //we have checked if user uploaded files, 

      function updateImage(file_saved){   
         let sql = ''
       console.log(file_saved)
       if (file_saved == true){
     
       sql = `UPDATE cars SET car_name = '${name}' ,category ='${category}',fuel_type ='${fuel}',price =${expense}, seat_capacity = ${seats} ,image = '${img_name}' WHERE id = ${id} ;`
  
      } else{
         sql = `UPDATE cars SET car_name = '${name}' ,category ='${category}',fuel_type ='${fuel}',price =${expense}, seat_capacity = ${seats} WHERE id = ${id} ;`
  

      }
      console.log(sql)

       db.query(sql).then(result=>{
           res.redirect('/home');
       }).catch((err)=>{
           console.log(err)
           res.status(500).send("err") //render('Rent.ejs',{error: err});
       })

    }
    } else {
       res.render('Rent');
    }  
}

//deleting inserted car
exports.deleteCar = (req,res)=>{

    const sql = `DELETE FROM cars WHERE id = ${req.body.id}`;
    console.log(sql)
    db.execute(sql). 
    then(result=>{
        // res.render('CarUpdate',{title:'cars',userData:result[0]});
        console.log(result)
       
        res.redirect('/cars/updates')
    }).catch((err)=>{
        console.log(err)
        res.status(500).send("err") //render('Rent.ejs',{error: err});
    });  
}