const express = require('express');
const router = express.Router();
const User = require('../models/User');

const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().min(6).max(255).required(),
  email: Joi.string()
    .min(6)
    .max(255)
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    }),
  password: Joi.string()
    .min(6)
    .max(1024)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find().limit(15);
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/register', async (req, res) => {
  try {
    const value = await schema.validateAsync(req.body);
    res.send(value);
  } catch (err) {
    res.json({ message: err });
  }
});

//   const user = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   try {
//     const savedUser = await user.save();
//     res.json(savedUser);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post('/login', async (req, res) => {
//     const user = new User({
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     });
//     try {
//       const savedUser = await user.save();
//       res.json(savedUser);
//     } catch (err) {
//       res.json({ message: err });
//     }
//   });

router.patch('/:userId', async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        },
      },
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete('/:userId', async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
