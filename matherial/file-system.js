const fs = require("fs");
const path = require("path");

fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Папка создана");
});

fs.writeFile(path.resolve(__dirname, "text.txt"), "test text", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("файл создан содержимое создано");
});
