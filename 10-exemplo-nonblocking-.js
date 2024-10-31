//non-blocking.js
import https from "node:https";

console.log(`Thread pool size is ${process.env.UV_THREADPOOL_SIZE}`);

const MAX_CALLS = 20;

const globalDate = new Date();

for (let i = 1; i <= MAX_CALLS; i++) {
	const startDate = new Date();
	https
		.request("https://www.google.com.br", (res) => {
			res.on("data", (r) => {});
			res.on("end", () => {
				const ms = new Date() - startDate;
				console.log(
					`Fetch ${i} started in ${(startDate - globalDate) / 1000}ms and ended at ${ms / 1000}s`,
				);
			});
		})
		.end();
}
