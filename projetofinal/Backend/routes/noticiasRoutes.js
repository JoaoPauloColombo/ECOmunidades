const express = require('express')
const router = express.Router();
const noticiasController = require('../controllers/noticiasController')
const upload = require('../config/multerConfig')

router.post('/', upload.single('foto'), noticiasController.createNoticia)
router.put('/:id', upload.single('foto'), noticiasController.updateNoticia)
router.get('/', noticiasController.getAllNoticia)
router.get('/:id', noticiasController.getNoticiaById)
router.delete('/:id', noticiasController.deleteNoticia)

module.exports = router