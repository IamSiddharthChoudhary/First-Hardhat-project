require("@nomicfoundation/hardhat-toolbox")
require("dotenv")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",
    networks: {
        rinkeby: {
            url: rinkebyUrl,
            accounts: [],
            chainId: 4,
        },
    },
}
