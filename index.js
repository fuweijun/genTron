const {TronWeb} = require('tronweb');
var crypto = require('crypto');

async function generateAccount() {
    var privateKey = crypto.randomBytes(32).toString('hex');
    console.log("Private Key", privateKey);
    // create tronweb client
    const fullNode = 'https://api.trongrid.io';
    const solidityNode = 'https://api.trongrid.io';
    const eventServer = 'https://api.trongrid.io';
    const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);
    // create new account
    const account = tronWeb.createAccount();
    console.log(account);
    return true;
}

(async () => {
    try {
        console.log("start");
        await generateAccount();
        console.log("end");
    } catch (e) {
        console.log(e);
    }
})();
