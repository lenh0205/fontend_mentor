require("dotenv").config();
const http = require("http");
const fs = require("fs");
const path = require("path");
// const browserSync = require("browser-sync").create();

// browserSync.init({
//   proxy: "localhost:3000", // replace with your server's hostname and port
//   files: ["public/**/*"], // replace with the path to your static files
//   reloadDelay: 1000, // wait for 1 second before reloading the page
// });

const server = http.createServer((req, res) => {
  console.log(`request for ${req.url} received`);

  let filePath = req.url === "/" ? "/index.html" : req.url;
  const fullPath = path.join(__dirname, filePath);
  const path_not_found = path.join(__dirname, "src", "404.html");

  const contentType = getContentType(filePath);

  fs.readFile(fullPath, function (error, content) {
    if (error) {
      if (error.code == "ENOENT") {
        fs.readFile(path_not_found, function (error, content) {
          if (error) {
            res.writeHead(404);
            res.end("Page not Found");
            return;
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf-8");
        });
      } else {
        res.writeHead(500);
        res.end(
          "Sorry, check with the site admin for error: " + error.code + " ..\n"
        );
        res.end();
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(process.env.PORT, process.env.HOST_NAME, () => {
  console.log(`listen on http://${process.env.HOST_NAME}:${process.env.PORT}/`);
  // browserSync.reload();
});

const getContentType = (filePath) => {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".wav": "audio/wav",
    ".mp4": "video/mp4",
    ".woff": "application/font-woff",
    ".ttf": "application/font-ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".otf": "application/font-otf",
    ".wasm": "application/wasm",
  };

  const extname = String(path.extname(filePath)).toLowerCase();
  return mimeTypes[extname] || "application/octet-stream";
};
