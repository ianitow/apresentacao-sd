import crypto from "node:crypto";

const MAX_CALLS = 8;

const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
	crypto.pbkdf2("password", "salt", 10000, 512, "sha512", (err, buf) => {
		console.log(`Hash ${i} took`, Date.now() - start);
	});
}
