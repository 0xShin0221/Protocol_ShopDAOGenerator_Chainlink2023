include .env

export $(shell sed 's/=.*//' .env)

chainlinkSimulate:
	npx hardhat functions-simulate --configpath $(CHAINLINK_CONFIG_PATH)

chainlinkClientCreate:
	npx hardhat functions-deploy-client --network polygonMumbai --verify false

chainlinkSubcscriptionFund:
	npx hardhat functions-sub-fund --subid $(CHAINLINK_SUB_ID)  --amount $(CHAINLINK_LINK_AMOUNT)  --network $(CHAINLINK_TARGET_NETWORK)

chainlinkFunctionsRequest:
	npx hardhat functions-request --configpath $(CHAINLINK_CONFIG_PATH) --subid $(CHAINLINK_SUB_ID) --contract $(CHAINLINK_CLIENT_CONTRACT_ADDRESS) --network $(CHAINLINK_TARGET_NETWORK) --show-stack-traces

chainlinkSubscriptionCreate:
	npx hardhat functions-sub-create --network polygonMumbai --amount 1 --contract ${CHAINLINK_CLIENT_CONTRACT_ADDRESS} 