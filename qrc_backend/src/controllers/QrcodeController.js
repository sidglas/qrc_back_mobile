const axios = require('axios')
// index show store update destroy
module.exports = {


  async index (request, response) {
   
    console.log('Prova de Dez')
    console.log('===================================================================')
    console.log(request.params)
    console.log(request.query.gitAddr)
    
    console.log('===================================================================')

    const qr = require('qr-image');


        const url = request.query.gitAddr
        const code = qr.image(url, { type: 'svg' })
    
        response.type('svg')
        //console.log('ANTES DO PIPE ' , response)
        code.pipe(response)
  
        /*
    })   
        */   
 console.log('VOU RETORNAR OK OK')  
return ({response})
//    const devs = await Dev.find()
//    return response.json(devs)
  },
}