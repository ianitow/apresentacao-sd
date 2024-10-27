import https from "node:https";

const MAX_CALLS = 8;
let min;
let max;
const start = Date.now();
for (let i = 0; i < MAX_CALLS; i++) {
	https
		.request("https://ifconfig.me", (res) => {
			res.on("data", () => {});
			res.on("end", () => {
				const time = Date.now() - start;
				min = Math.min(time, min);
				max = Math.max(time, min);
				console.log(`Request ${i} took ${Date.now() - start}ms`);
			});
		})
		.end();
}
