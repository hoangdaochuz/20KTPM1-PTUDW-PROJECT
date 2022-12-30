const multer = require('multer')
const {storage} = require('../utils/cloudinary')

const upload = multer({
    storage: storage,
})
module.exports = {upload}