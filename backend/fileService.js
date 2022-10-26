import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";

class FileService {
  saveFile = (file) => {
    try {
      const fileName = uuid.v4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  };
}

// deleteFile = (id) => {
//   fs.unlink("./static/" + id + ".jpg", (err) => {
//     if (err) {
//       throw err;
//     }

//     console.log("Delete File successfully.");
//   });
// };

export default new FileService();
