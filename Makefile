include .env

export $(shell sed 's/=.*//' .env)

chainlinkSimulate:
	npx hardhat functions-simulate --configpath $(CHAINLINK_CONFIG_PATH)  --show-stack-traces

chainlinkClientCreate:
	npx hardhat functions-deploy-client --network $(CHAINLINK_TARGET_NETWORK) --verify true

chainlinkSubcscriptionFund:
	npx hardhat functions-sub-fund --subid $(CHAINLINK_SUB_ID)  --amount $(CHAINLINK_LINK_AMOUNT)  --network $(CHAINLINK_TARGET_NETWORK)

chainlinkFunctionsRequest:
	npx hardhat functions-request --configpath $(CHAINLINK_CONFIG_PATH) --subid $(CHAINLINK_SUB_ID) --contract $(CHAINLINK_CLIENT_CONTRACT_ADDRESS) --network $(CHAINLINK_TARGET_NETWORK) --show-stack-traces

chainlinkSubscriptionCreate:
	npx hardhat functions-sub-create --network  $(CHAINLINK_TARGET_NETWORK) --amount 1 --contract ${CHAINLINK_CLIENT_CONTRACT_ADDRESS} 

# Add: consumer contract to subscription
chainlinkSubscriptionAdd:
	npx hardhat functions-sub-add --subid $(CHAINLINK_SUB_ID) --contract ${CHAINLINK_CLIENT_CONTRACT_ADDRESS} --network $(CHAINLINK_TARGET_NETWORK)