### bchjs-slp-wallet-tools

This tools are from https://github.com/Permissionless-Software-Foundation/bch-js-examples

## Installation

Download or clone repository

Open a command line, navigate to bchjs-slp-wallet-tools-main and run:

'npm i'

_*ignore errors (keccak, secp ...)_

## Conversion

This app converts a wallet seed phrase to a private key (WIF)

Open .env file (eg. in notepad) which is located in conversion directory, paste your seed phrase to MNEMONIC field and choose your wallet derivation path (add a comment or uncomment)

From the command line navigate to conversion directory and run:

'npm start'

and you will see your address detail

## Wallet

This app creates a wallet address (derivation path is m/44'/245'/0')

From the command line navigate to wallet directory and run:

'npm start'

You will see a generated wallet address

Your wallet address details are stored in two files (in the wallet directory):

- wallet-info.txt where you will see:

mnemonic (seed phrase)

derivation path

cashAddress: "bitcoincash:..."

- wallet.json where you will see:

mnemonic: "seed phrase"

cashAddress: "bitcoincash:..."

slpAddress: "simpleledger:..."

legacyAddress: "..."

WIF: "..."

_*you can open it in eg. notepad. If you run 'npm start' again in the wallet directory, files will be overwritten_

## Check-balances

This app check ballance in the generated wallet address

From the command line navigate to chcek-balances directory and run:

'npm start'

and you will your wallet address balance