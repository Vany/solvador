const Web3=require("web3");
const config = require("./conf");
// const privateKey = "0xde0ca9725c74d0792c16e4c90d375625f8c18dc96ace6e416b1f2d946428087e";

const web3 = new Web3(new Web3.providers.HttpProvider('http://68.183.156.248:8545'));
const account = web3.eth.accounts.privateKeyToAccount(config.privateKey);
(async ()=>{
    console.log(web3.utils.fromWei((await web3.eth.getBalance(account.address))));
})();
// console.log(web3.utils.fromWei((await web3.eth.getBalance(account.address))))
// console.log(web3.eth.getBalance(account.address));
