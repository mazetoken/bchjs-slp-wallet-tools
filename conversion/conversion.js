/*
  Convert Mnemonic seed phrase to Private key (WIF)
*/
const dotenv = require('dotenv');
dotenv.config();

const NETWORK = 'mainnet';

// REST API servers.
const BCHN_MAINNET = 'https://bchn.fullstack.cash/v4/';

const BCHJS = require('@psf/bch-js');

// Instantiate bch-js based on the network.
let bchjs;
if (NETWORK === 'mainnet') bchjs = new BCHJS({ restURL: BCHN_MAINNET });

async function conversion () {
  try {
    const mnemonic = process.env.MNEMONIC;

    // root seed buffer
    const rootSeed = await bchjs.Mnemonic.toSeed(mnemonic);
    // master HDNode
    let masterHDNode;
    if (NETWORK === 'mainnet') masterHDNode = bchjs.HDNode.fromSeed(rootSeed);

    // HDNode of BIP44 account
    const account = bchjs.HDNode.derivePath(masterHDNode, process.env.DERIVATION);

    const change = bchjs.HDNode.derivePath(account, '0/0');

    // get the cash address
    const cashAddress = bchjs.HDNode.toCashAddress(change);
    const slpAddress = bchjs.SLP.Address.toSLPAddress(cashAddress);
    const legacyAddress = bchjs.SLP.Address.toLegacyAddress(cashAddress);
    
    // get private key (WIF)
    const wif = bchjs.HDNode.toWIF(change);

    console.log(`SLP Address: ${slpAddress}:`);
    console.log(`Cash Address: ${cashAddress}:`);
    console.log(`Legacy Address: ${legacyAddress}:`);
    console.log(`Private Key WIF: ${wif}:`);
  } catch (err) {
    console.error('Error in conversion: ', err);
    console.log(`Error message: ${err.message}`);
    throw err;
  }
}
conversion();
