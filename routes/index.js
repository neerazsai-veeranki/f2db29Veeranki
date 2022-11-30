var express = require('express');
var router = express.Router();
var passport = require('passport'); 
var Account = require('../models/account'); 
 
router.get('/', function (req, res) { 
    res.render('index', { title: 'Tunnels App', user : req.user }); 
}); 
 
router.get('/register', function(req, res) { 
    res.render('register', { title: 'Tunnels App Registration'}); 
}); 
 
router.get('/logout', function(req, res, next) {          // use post or delete for better safety
  req.logout( function(err) {
      if (err) { return next(err);}
      res.redirect('/');
  });
});

router.post('/register', function(req, res) { 
  Account.findOne({ username : req.body.username },  
    function(err, user) { 
      if(err) { 
        return res.render('register', { title: 'Registration',  
                  message: 'Registration error', account : req.body.username }) 
      } 
      if(user == {} ){ 
        return res.render('register', { title: 'Registration',  
                   message: 'Existing User', account : req.body.username }) 
      } 
      console.log(req.body.password)
      let newAccount = new Account({ username : req.body.username, password: req.body.password }); 
      Account.register(newAccount, req.body.password, function(err, user){ 
        if (err) { 
          return res.render('register', { title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        } 
        if(!user){ 
          return res.render('register',{ title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        }  
        console.log('Sucess, redirect'); 
        res.redirect('/'); 
      }) 
    })    
  }) 
  
router.get('/login', function(req, res) { 
    res.render('login', { title: 'Tunnels App Login', user : req.user }); 
}); 
 
router.post('/login', passport.authenticate('local'), function(req, res) { 
    res.redirect('/'); 
}); 
 
router.get('/logout', function(req, res) { 
    req.logout(); 
    res.redirect('/'); 
}); 
 
router.get('/ping', function(req, res){ 
    res.status(200).send("pong!"); 
}); 
 
module.exports = router; 