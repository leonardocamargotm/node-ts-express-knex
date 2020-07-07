import Joi from '@hapi/joi';

const schema = Joi.object().keys({
  name: Joi.string().required().label('O campo nome é obrigatório.'),
  salary: Joi.number(),
});

export default schema;
