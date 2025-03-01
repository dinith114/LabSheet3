const fs = require("fs");
fs.writeFile("file.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File saved!");
});
