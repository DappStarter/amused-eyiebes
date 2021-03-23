require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gesture hill fresh skull drift razor toss coach give clog slot gate'; 
let testAccounts = [
"0x40e462cda41a7d52d20715abc944666b9855a422465ad463c7a859f5abc30580",
"0x54ff489140174e438a1694f2c0feaa8114f2e8dff943dc28dd900f9f3491e5c6",
"0x24265a59351a01696a6f938198479a81e6571e12060f86a600c43fa42e4562be",
"0x30bdc2550ed553ff6f0bb15f4fd9954f19ad78089a19555b91f81729ba48d584",
"0x1fc9581b5317d07ee769e47e62f0aa2e2d864f081a8a01f60ec7112348652ed9",
"0xd27d319ffa0b6bfc8d41333f573652191046b75c0ca79d08e8a5820f5b6cb62e",
"0x6f8209b7067cf57aed962d91d22a228bd3a3d3aa953cee06bafe502b0b87c747",
"0x398480e9ee7b700debf951f906a588c501eee452d86d20ec295b07c308000810",
"0xe0df65147ce17df01b53a542d9674ff298c4fa2e0342ddaf22d40dc5922bc124",
"0xffbeacc9f0b116bb23a6c4a6fb682c4d8f9e1d98fdf6d5208ce7161dcdf62a28"
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

