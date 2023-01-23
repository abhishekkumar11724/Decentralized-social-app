var calculator = artifacts.require("./calculator.sol");

module.exports = function(deployer) {
  deployer.deploy(calculator);
};
