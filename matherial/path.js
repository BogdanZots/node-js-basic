const path = require("path");
const fullpath = path.join(__dirname, "---------", "first", "second", "third");
console.log("склеить пути  //// ", fullpath);
console.log("парсинг пути  ///", path.parse(fullpath));

// ----------------

const siteURL = "https://localhost:8080/users?id=5123";

const url = new URL(siteURL);
console.log("URL /////// ", url);
