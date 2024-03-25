const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];
        const limits = 1024 * 1024

        if (!allowedFileTypes.includes(file.mimetype) && req.file.size > limits) {
            cb (new Error("Files not match"));
            return;
        }
        cb(null, "./storage");
    },

    filename: function(req,file,cb) {
        cb(null, Date.now + "-" + file.originalname)
    }

});

module.exports = {
    storage,
    multer
}