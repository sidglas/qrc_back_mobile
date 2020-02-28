const { Router } = require('express')
const QrcodeController = require('./controllers/QrcodeController')

const routes = Router()

routes.get('/qrcode', QrcodeController.index)


module.exports = routes