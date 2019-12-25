const exec = require('child_process').exec; 
const HASH = '';

function main() {
	setTimeout(() => {
		HASH = exec('git rev-parse HEAD');
		main();
	}, 5000)
}

main();