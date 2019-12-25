const exec = require('child_process').exec;
let HASH = '';

async function build() {
	return new Promise(res => {
		console.log('REBUILD!!!');
		res();
	});
}

function main() {
	setTimeout(() => {
		exec('git rev-parse HEAD', async (err, stdout, stderr) => {
			if (HASH !== stdout) {
				try {
					await build();

					HASH = stdout;
					main();
				} catch (e) {

				}
			} else {
				main();
			}
		});
	}, 1000)
}

main();

