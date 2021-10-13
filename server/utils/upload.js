import multer from "multer";
// import { GridFsStorage } from "multer-gridfs-storage";

import path from "path";

// const storage = new GridFsStorage({
//   // url: `mongodb://user:codeforinterview@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`,
//   url: "mongodb://localhost:27017/myblog",
//   options: { useUnifiedTopology: true, useNewUrlParser: true },
//   file: (request, file) => {
//     const match = ["image/png", "image/jpg", "image/jpeg"];

//     if (match.indexOf(file.mimeType) === -1)
//       return `${Date.now()}-blog-${file.originalname}`;
//     return {
//       bucketName: "photos",
//       filename: `${Date.now()}-blog-${file.originalname}`,
//     };
//   },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

export default multer({ storage });