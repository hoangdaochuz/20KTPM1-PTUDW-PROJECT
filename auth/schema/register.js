module.exports = {
  type: 'object',
  properties: {
    fullname: {type: 'string', 'minLength': 1},
    email: {type: 'string', format: 'email'},
    password: {type: 'string', 'minLength': 6},
  },
  required: ['fullname', 'email','password'],
  additionalProperties: false,
}