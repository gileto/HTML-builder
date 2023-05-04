const path = require("path");
const fs = require("fs");

fs.readdir(
 path.join(__dirname, "secret-folder"),
 { withFileTypes: true },
 (err, files) => {
  if (err) throw err;
  for (let file of files) {
   if (file.isFile()) {
    fs.stat(
     path.join(__dirname, `secret-folder/${file.name}`),
     (err, stats) => {
      if (!stats.isDirectory()) {
       let splitted = file.name.split(".");
       console.log(
        file.name + " - " + splitted[1] + " - " + stats.size + " bytes"
       );
      }
     }
    );
   }
  }
 }
);
