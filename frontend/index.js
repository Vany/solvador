var w3, myAddress, myContract;

$(document).ready(() => {
    onInit()
  });

  async function onInit() {
    w3 = checkAndInstantiateWeb3();
    w3.eth.getBalance('0xA85f0407Bf7d5Aeb7E776573659e85Af32eD40ed', function (error, result) {
        if (!error)
            console.log('Ether:', web3.utils.fromWei(result,'ether')); 
        else
            console.log('Huston we have a promblem: ', error);
        console.log(result);
    });
  }

  function checkAndInstantiateWeb3() {
        return new Web3(new this.Web3.providers.HttpProvider('http://ropsten.infura.io/v3/165e981477d146ecb702fce1ffbef166'));
  }