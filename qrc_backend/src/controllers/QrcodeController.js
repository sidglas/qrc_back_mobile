const axios = require('axios')
// index show store update destroy
module.exports = {

  async index (request, response) {
   
  const qr = require('qr-image');
  const url = request.query.gitAddr
  const code = qr.image(url, { type: 'svg' })
    
  response.type('svg')
  code.pipe(response)
  return (response)

  },
}