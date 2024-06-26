import { log } from "node:console";
import { createServer } from "node:http";
// import { pageSelect } from "./pageSelect.js";
import formidable from "formidable";
import { IncomingForm } from "formidable";

createServer((req, res) => {
  // log(req.url);
  // pageSelect(req.url, res);

  if (req.method === "POST") {
    const userData = new IncomingForm();
    userData.parse(req, (err, fields, files) => {
      if (err) {
        req.end(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File upload</title>
  </head>
  <body>
    <h1>Server error</h1>
  </body>
</html>
`);
      } else {
        log("userdata fields", fields);
        log("userdata files", files);

        res.end(`
        <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File upload</title>
  </head>
  <body>
    <h1>Data send</h1>
  </body>
</html>
          `);
      }
    });
  } else if (req.method === "GET") {
    res.end(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>File upload</title>
  </head>
  <body>
    <form action="/" method="post" enctype="miltipart/form-data">
      <input type="text" name="username" placeholder="enter your username" />
      <input type="file" name="userfiles" />
      <button type="submit">submit</button>
    </form>
  </body>
</html>
`);
  }
}).listen(4000, () => log("server running"));
