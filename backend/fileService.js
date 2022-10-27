import * as uuid from "uuid";
import * as path from "path";
import * as fs from "fs";

class FileService {
  saveFile = (file, heroName) => {
    try {
      const fileName = heroName + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  };

  deleteFile = (name) => {
    console.log(name);
    fs.unlink("./static/" + name + ".jpg", (err) => {
      if (err) {
        throw err;
      }

      console.log("Delete File successfully.");
    });
  };
}
export default new FileService();
