//0x23a8882D2116C73a7C01a18c83D7420935102C5f

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
     
  

    