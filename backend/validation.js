const Joi = require('joi');

const registerValidation = (data) => {
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

  return schema.validate(data);
};

const loginValidation = (data) => {
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

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
