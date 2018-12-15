const path = require('path');
const fs = require('fs');
const solc = require('solc');

const indoxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');

var input = {
	language: 'Solidity',
	sources: {
		'Inbox.sol': {
			content: fs.readFileSync(indoxPath, 'utf8')
		}
	},
	settings: {
		outputSelection: {
			'*': {
				'*': [ '*' ]
			}
		}
	}
}

var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol']['Inbox'];
//console.log(output.evm.gasEstimates);
module.exports = {
    interface: output.abi,
    bytecode: output.evm.bytecode.object
};
