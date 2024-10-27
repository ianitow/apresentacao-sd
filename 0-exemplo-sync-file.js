import fs from "node:fs";

const start = Date.now();
console.log("Primeiro", Date.now() - start);
console.log("Segundo", Date.now() - start);
fs.readFileSync("./10.mkv");
console.log("Terceiro", Date.now() - start);
fs.readFileSync("./10.mkv");
fs.readFileSync("./10.mkv");
fs.readFileSync("./10.mkv");
console.log("Quarto", Date.now() - start);
