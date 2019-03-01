const web3 = require('./web3');
const wmtSystem = require('../blockchain/build/knowYourDrug.json');

const instance = new web3.eth.Contract(
    JSON.parse(wmtSystem.interface),
    '0x2e50D6fEDDc8b6C64D3e8825e091AF5df37Cb293'
)

module.exports = instance;