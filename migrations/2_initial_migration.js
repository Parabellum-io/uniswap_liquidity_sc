const Swap = artifacts.require("swap")
const UNISWAP_FACTORY_ADDRESS = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

module.exports = function (deployer) {
  //deployer.deploy(ParabellumLiquidity, UNISWAP_FACTORY_ADDRESS );
  deployer.deploy(Swap, UNISWAP_FACTORY_ADDRESS)
};
