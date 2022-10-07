//imports
const { ethers, run, network } = require("hardhat")

//async main()
async function main() {
    const simpleStorage = await ethers.getContractFactory("Lock")
    console.log("Deploying contract!!")
    const Time = parseInt(1508330494000)
    const deployedSimpleStorage = await simpleStorage.deploy(Time)
    // RPC URL and privatekey is ptovided by hardhat
    console.log(`Deployed to ${deployedSimpleStorage.address}`)
    await deployedSimpleStorage.deployed()

    // Verification of our contract.
    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block conformations...")
        await deployedSimpleStorage.deployTransaction.wait(6)
        await verify(deployedSimpleStorage.address, [])
    }
}

async function verify(contractAddress, args) {
    console.log("Verifying Contract")

    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already exits")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

// main()
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
