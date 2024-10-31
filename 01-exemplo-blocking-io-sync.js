import fs from "node:fs";

const start = Date.now();
console.log("Primeiro", Date.now() - start);
console.log("Segundo", Date.now() - start);
fs.readFileSync("./large.file");
console.log("Terceiro", Date.now() - start);
fs.readFileSync("./large.file");
fs.readFileSync("./large.file");
fs.readFileSync("./large.file");
console.log("Quarto", Date.now() - start);
