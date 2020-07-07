import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email(),
});

export default schema;
