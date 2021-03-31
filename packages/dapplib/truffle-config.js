require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'half problem forward tooth warrior ridge remember around hover climb tail skill'; 
let testAccounts = [
"0x7155c1ea2d99153f1690c18547543813a07ef8a601eced90b67f0de1c0dea897",
"0xbc6e3b8eb6aa693e77b1736474b5332801eeb7c100c72f99d36444da663b6e88",
"0x68a081bb72addf35806f06ea8365e9109bd9dd417d4b678b2fab1a3e78b0182c",
"0x478a2f5ba66f0307af0b1bfb5537b923b07f71cd8d1ec21f04d3487313df56f5",
"0x297a3283826696b915f2a3c3f9c25d8ae2a32cc1bc205822940dbd09671cb92c",
"0xaa510d7e03fc3e2b663cc41f64ccf05ba89620031b6142507eba6db42274cb99",
"0xdeee7d345ee37883a2de7be248f149f577254deb8c79ce59b47c56f7f93b94e8",
"0xe61f633d98770e85b7c641881499d0004dce3b765a8612e568144ad020f5a161",
"0xa8575cdaa6b985cfb37277c1aa3cdf663c97a214d04f0ea36093f1c7e336fc39",
"0x5ccc8d9938f89c74ee45f01a6b2f1b9464e28d6e552ef7c1c298665b3d973c07"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

