require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/e75jIV8VM_f6ooFO8cynEe8KLAB_5l_9",
      accounts: [
        "c911f0c5f87148d4ea2912d5a4fa7ed3790755d2b49ed9ef2822dbb85f60aa17",
      ],
    },
  },
};
