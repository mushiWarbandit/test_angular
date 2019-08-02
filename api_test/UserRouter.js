// UserRouter.js

const express = require('express');
const UserRouter = express.Router();
// Require Product model in our routes module
let Product = require('./product');

const User = require('./User');
const productRoutes = express.Router();

UserRouter.route('/create').post(function (req, res) {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json('User added successfully');
      console.log(user);
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined store route
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'Product': 'Product has been added successfully'});
      console.log(product)
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

module.exports = UserRouter;