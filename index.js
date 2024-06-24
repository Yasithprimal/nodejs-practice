import { log } from "node:console";
// import { appendFile, readFile, rm, writeFile } from "node:fs";
import { dirname, join } from "node:path";
import { encode } from "node:punycode";
import { fileURLToPath } from "node:url";
import { appendFile, readFile, writeFile, rmdir } from "node:fs/promises";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import fileRead from "./lib/readfile.js";
import fileWrite from "./lib/writefile.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

fileRead("read.txt", (data) => {
  const whatToDo = String(data).split(" ");
  const command = whatToDo[0];
  const content = whatToDo.slice(1, whatToDo.length - 1).join(" ");
  const file = whatToDo[whatToDo.length - 1];
  // log(whatToDo);

  if (command === "write") {
    fileWrite(file, content, (d) => log(d));
  }
});

///sync API///

// rmSync(join(__dirname, "write.js"));

// writeFileSync(
//   join(__dirname, "write.js"),
//   `
// const c = 'andrew'`
// );

// const data = readFileSync(join(__dirname, "write.js"), {
//   encoding: "utf-8",
// });
// log(data);

///promise API///

// readFile(join(__dirname, "read.txt"), {
//   encoding: "utf-8",
// })
//   .then((data) => log(data))
//   .catch((err) => log(err));

// const writeFun = async (data) => {
//   try {
//     const res = await writeFile(join(__dirname, "write.js"), data, {
//       encoding: "utf-8",
//     });
//     log(res);
//   } catch (error) {
//     log(error);
//   }
// };
// writeFun(`const a = 'yasith';
//   console.log(a)`);

///callback API///

// readFile(join(__dirname, "read.txt"), { encoding: "utf-8" }, (err, data) => {
//   if (!err) {
//     log(data);
//   } else {
//     log(err);
//   }
// });

// writeFile(join(__dirname, "write.txt"), "I am learning node.js", (err) => {
//   if (err) {
//     log(err);
//   }
// });

// appendFile(
//   join(__dirname, "write.js"),
//   `
// const a = 'yasith';
// const c = [1,2,3,4,5];

// console.log(a);
// console.log(c[2]);`,
//   (err) => {
//     if (!err) {
//       log("message overwritten");
//     }
//   }
// );

// rm(join(__dirname, "write.txt"), (err) => !err && log("file is deleted"));
