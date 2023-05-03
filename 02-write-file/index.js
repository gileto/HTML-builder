const { stdout, stdin } = process;
const fs = require("fs");
const path = require("path");

stdout.write("Привет, пиши свой текст: \n");
fs.writeFile(path.join(__dirname, "text.txt"), "", (err) => {
 if (err) throw err;
});
let data = "";
stdin.on("data", (input) => {
 if (input.includes("exit")) {
  stdout.write("покеда");
  process.exit();
 }
 data = input;
 fs.appendFile(path.join(__dirname, "text.txt"), data, (err) => {
  if (err) throw err;
 });
});

process.on("SIGINT", () => {
 stdout.write(" покеда");
 process.exit();
});
