<p align="center"><img height="75" src="https://i.imgur.com/C2zgFLY.png"></p>

## About This Project

This is a [Node](https://nodejs.org/en) boilerplate project to compile, test and deploy [Ethereum](https://www.ethereum.org) [Smart Contracts](https://blockgeeks.com/guides/smart-contracts). It attempts to take the pain out of development by easing common tasks used in the majority of the smart contract projects, such as: 

- Compile smart contract code with [solc](https://www.npmjs.com/package/solc) compiler.
- Simulate a local ethereum blockchain with [ganache-cli](https://www.npmjs.com/package/ganache-cli).
- Test smart contract functions using [mocha](https://www.npmjs.com/package/mocha).
- Use [truffle-hdwallet-provider](https://www.npmjs.com/package/truffle-hdwallet-provider) and [Infura APIs](https://infura.io) to deploy smart contracts in [Rinkeby testnet](https://www.rinkeby.io).

Ethereum mainnet and other testnet addresses are provided in constent file. Provider can be changed to connect and deploy smart contracts on other chains.

## Notes

- Use metamask browser extention to create your ethereum wallet and wallet mnemonic.
  - [Chrome Extention](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
  - [Mozilla Firefox plugin](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask)
- Create a [Infura](https://infura.io) account to get Infura API key. 

## Security Vulnerabilities

- Ethereum wallet mnemonic in the constent file.
- Infura API key in the constent file.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).