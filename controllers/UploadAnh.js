let multer = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public/images/banner/');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});

function fileFilter(req, file, cb){
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') 
  {
    return cb(null, true)
  }
  cb(new Error('Sai dinh dang'))
}

const uploadConfig = multer({
    storage, 
    limits: { fileSize: 1024 * 1024 },
    fileFilter
});

const uploadSingle = fieldname => uploadConfig.single(fieldname);

module.exports = {uploadSingle}