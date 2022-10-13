const { ethers } = require("hardhat")
const { assert } = require("chai")

describe("JattData", function () {
    let jattData, jattDataFactory
    beforeEach(async function () {
        jattDataFactory = await ethers.getContractFactory("JattData")
        jattData = await jattDataFactory.deploy()
    })

    it("Should start with zero", async function () {
        let jigra = jattData.retrieve()
        let expextedValue = 0
        assert.equal(jigra, expextedValue)
    })

    // it("Should update the value", async function () {})
})
