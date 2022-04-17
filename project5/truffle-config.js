const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = ['0x629712c905b7e13d329b9cee97dc1c37c3cf6d7073e9eeaf3fdf0ce5a32f7ee6'];

module.exports = {
  

  networks: {

    eth: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'ETH_NODE_URL'
      ),
      network_id: 1,
      skipDryRun: true
    },

    ethTestnet: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'ETH_NODE_URL'
      ),
      network_id: 5,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://bsc-dataseed.binance.org/'
      ),
      network_id: 56,
      skipDryRun: true
    },
    bscTestnet: {
      provider: () => new HDWalletProvider(
        privateKeys,
        'https://data-seed-prebsc-1-s1.binance.org:8545/'
      ),
      network_id: 97,
      skipDryRun: true
    }

  },


  mocha: {
    // timeout: 100000
  },


  compilers: {
    solc: {
      version: "0.8.13",      
      
    }
  },

};
