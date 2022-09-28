//imports
const { ethers } = require("hardhat")

//async main()
async function main() {
    const simpleStorage = await ethers.getContractFactory("Lock.sol")
    console.log("Deploying contract!!")
    const deployedSimpleStorage = await simpleStorage.deploy()
    await deployedSimpleStorage.deployed()
}

// main()
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
