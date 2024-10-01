const {TronWeb} = require('tronweb');
var crypto = require('crypto');
const maxCount = 1000;//生成个数
async function generateAccount() {
    var privateKey = crypto.randomBytes(32).toString('hex');
    //console.log("Private Key", privateKey);
    // create tronweb client
    const fullNode     = 'https://api.trongrid.io';
    const solidityNode = 'https://api.trongrid.io';
    const eventServer  = 'https://api.trongrid.io';
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
    // create new account
    //const account = tronWeb.createAccount();
    // create new mnemonic
    const account = tronWeb.createRandom();
    console.log(account.address,account.mnemonic.phrase);
    return true;
}

(async () => {
    try {
        console.log("start");
        for (let index = 0; index < maxCount; index++) {
            await generateAccount();
        }
        console.log("end");
    } catch (e) {
        console.log(e);
    }
})();
