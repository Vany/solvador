const web3 = new Web3(new Web3.providers.HttpProvider('http://68.183.156.248:8545'));
console.log(web3.eth.accounts[0]);
getBalance(web3.eth.accounts[0]);

function getBalance(address) {
    console.log(
        web3.toDecimal(
            web3.eth.getBalance(address)
        ) / Math.pow(10,18)
    );
}