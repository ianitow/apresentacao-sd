import fs from "node:fs";

console.log("Primeiro");

fs.readFile("./0-exemplo-callback-file.js", (err, data) => {
	console.log("Arquivo lido com sucesso");
});

console.log("Último console log");
