import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limit: {fileSize: 10*1024*1024},
});
export default upload;

// At production level I should 
/*
     import multer from 'multer'
     const storage = multer.memoryStorage();
     const fileFilter = (req, file, cb) => {
          const allowedTypes = {
             "image/jpg",
             "image/png",
             "image/webp"
          };
          if(allowedTypes.includes(file.mimetypes)) {
             cb(null, true);
          } else {
              cb(new Eror("Only emage Allowed"))
            }
        const upload = {
           storage,
           limit :{
             maxSize: 5*1024*1024;
           },
           fileFilter
        }
        }
*/