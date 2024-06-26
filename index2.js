import { cardGen } from "./lib/htmlCardGen.js";
import fileRead from "./lib/readfile.js";
import fileWrite from "./lib/writefile.js";
import { log } from "console";
// import { prompt } from "inquirer";
import inquirer from "inquirer";
// import { type } from "os";

const studentInfo = [];

(async () => {
  let allCard = "";

  do {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "enter student name",
      },
      {
        type: "number",
        name: "age",
        message: "enter student age",
      },
      {
        type: "input",
        name: "city",
        message: "enter student city",
      },
      {
        type: "list",
        name: "stuclass",
        message: "enter student class",
        choices: ["class 1", "class 2", "class 3", "class 4"],
      },
      {
        type: "checkbox",
        name: "subject",
        message: "enter student subject",
        choices: ["java", "javascript", "python", "golang", "dart"],
      },
      {
        type: "confirm",
        name: "check",
        message: "Have more students",
      },
    ]);

    const { check, ...info } = data;
    studentInfo.push(info);
    if (!data.check) {
      break;
    }
  } while (true);

  studentInfo.forEach(({ name, age, stuclass, subject }) => {
    allCard += cardGen(name, age, stuclass, subject);
  });

  log(allCard);
  const htmlContent = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student info</title>
  </head>
  <link rel="stylesheet" href="./index.css" />
  <body>
    <main class="main">
    ${allCard}
    </main>
  </body>
</html>
`;
  fileWrite("index.html", htmlContent, (d) => log(d));
})();
