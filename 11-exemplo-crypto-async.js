// index.js
import { pbkdf2 } from "crypto";

const TEN_MILLIONS = 1e7;

function crypto(callback) {
	pbkdf2("secret", "salt", TEN_MILLIONS, 64, "sha512", callback);
}

console.log(`Thread pool size is ${process.env.UV_THREADPOOL_SIZE}`);

const main = () => {
	const startDate = new Date();
	const runAsyncBlockingOperation = (runIndex) => {
		crypto(() => {
			const ms = new Date() - startDate;
			console.log(`Finished run ${runIndex} in ${ms / 1000}s`);
		});
	};

	runAsyncBlockingOperation(1);
	runAsyncBlockingOperation(2);
	runAsyncBlockingOperation(3);
	runAsyncBlockingOperation(4);
};

main();
