import { log } from "node:console";
import { readFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = (path, yourFunc = () => {}) => {
  readFile(
    join(__dirname, `../${path}`),
    {
      encoding: "utf-8",
    },
    (err, data) => {
      if (err) {
        log(err);
      } else {
        yourFunc(data);
      }
    }
  );
};

// fileRead("../read.txt", (data) => log(data));

export default fileRead;
