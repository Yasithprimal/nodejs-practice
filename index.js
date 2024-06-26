import { log } from "node:console";
import { createServer } from "node:http";
import { pageSelect } from "./pageSelect.js";

createServer((req, res) => {
  log(req.url);
  pageSelect(req.url, res);
}).listen(4000, () => log("server running"));
