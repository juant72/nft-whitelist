//0x2dC5946a6E4416a30B6A16E30254919b2E0d8bb0

const {ethers} = require('hardhat');

async function main() {

  const whiteListContract= await ethers.getContractFactory('Whitelist');

  const deployedWhiteListContract = await whiteListContract.deploy(10);

  await deployedWhiteListContract.deployed();

  console.log("Whitelist contract address: ",  deployedWhiteListContract.address);

}


main()
  .then(() => process.exit(0))
  .catch(err => {
      console.error(err);
      process.exit(1);
  });
     
  

    