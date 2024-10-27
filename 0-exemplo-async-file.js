import fs from "node:fs";

const start = Date.now();

const MAX_CALLS = 24;

for (let i = 0; i < MAX_CALLS; i++) {
	fs.readFile("./10.mkv", (err, data) => {
		console.log(`Arquivo ${i} lido com sucesso`, Date.now() - start);
	});
}
