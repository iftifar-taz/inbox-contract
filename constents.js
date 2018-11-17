//this will be generated after 1st deploy.
const contractAddress = '0x1f2B214cbcFE03Aa4DE89C5840B2611923f698EE';

const infura_product_key = 'c3b0f4694b7a4e6aaf7f474e9522fa9c';
const networks = {
    MainnetHttp: 'https://mainnet.infura.io/v3/' + infura_product_key,
    MainnetWebsocket: 'wss://mainnet.infura.io/ws/v3/' + infura_product_key,
    RopstenHttp: 'https://ropsten.infura.io/v3/' + infura_product_key,
    RopstenWebsocket: 'wss://ropsten.infura.io/ws/v3/' + infura_product_key,
    KovanHttp: 'https://kovan.infura.io/v3/' + infura_product_key,
    KovanWebsocket: 'wss://kovan.infura.io/ws/v3/' + infura_product_key,
    RinkebyHttp: 'https://rinkeby.infura.io/v3/' + infura_product_key,
    RinkebyWebsocket: 'wss://rinkeby.infura.io/ws/v3/' + infura_product_key,
    InfuraHttp: 'https://ipfs.infura.io/ipfs/',
    InfuraWebsocket: 'https://ipfs.infura.io:5001/api/',
};

module.exports = {
    MNEMONIC: 'tube yellow recipe endorse expose cloth glove will found govern blur holiday',
    NETWORK: networks.RinkebyHttp,
};