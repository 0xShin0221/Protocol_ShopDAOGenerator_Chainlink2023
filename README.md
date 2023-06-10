## Architecture based Smart Contracts

- [First draft architecure](./docs/architecrure/v1C4Architecture.md)

[WIP] So there may be potential changes or deviations from the current configuration.

## Deployed Contract

WIP
| Contract | Address | Description |
| -------- | ------- | ----------- |
| SortedProposalList  | `0x1234567890abcdef1234567890abcdef12345678` | This contract is used as a sorted list for proposals. When a proposal is created, it is added to this list and ordered based on the voting period of the proposal. The proposal with the earliest end of the voting period will have the first index. Chainlink automation will periodically check if the voting period of the proposal at the first index has passed. If the time has passed, Chainlink automation will execute the 'queue' function for that proposal. |

| SortedQueueAndExecutionList | `0x88A41E8A54D7201a4c7f438C555065850200D2cD` | The process is similar to the SortedProposalList. When a proposal is queued, it is added to the SortedQueueAndExecutionList. Subsequently, Chainlink Automation will invoke the 'execute' function for that proposal. |

| ProposalListsUpKeep | `0x7D43890323835027CCF64dA64a39731936dF301F` | This smart contract is chainlin autimation used for SortedProposalList. |
| QueueAndExecutionListsUpKeep | `0xD1B9D24675606a964F46261a40d7Af7DDAa5438b` | This smart contract is chainlin autimation used for SortedQueueAndExecutionList. |

| DaoFactory | `0xe4797C4Ce996B4a06603f45ffd5CaDdEEa24C381` | This smart contract is called DaoFactory to create decentralized autonomous organization (DAO) contract.|

| GovernanceNFTs | `0xbD4c6c6E2Ba365C97D65EbA54eAE43aD3Ff327AF` | This smart contract is used as votes for DAO.|

| GovernanceTimeLock | `0x3c8afaFf2beb5ACEA035FbE1c7C6A3C8a7361FaB` | This smart contract is used as timelock for DAO.|

| ProfitNFT | `0x793B263537afAd7C61D923Ad3463E416218F5f37` | This smart contract represents special NFTs that allow users to claim profits. When a brand manager executes the 'productPropose' function to list items on Shofipy, users can purchase these NFTs. When the listed items are sold, users can claim a portion of the profits based on the number of profit NFTs they own.|

| FunctionsConsumer | `0xa3A309647B833a0b612A297e41526CcD16Fc0c79` |This smart contract serves as a Chainlink FunctionsConsumer to list items by calling the Shopify API. It is specifically designed to be used when a proposal created from the 'productPropose' function receives enough votes.|

| Saledistribution | `0x479a8b970cd2b02f93c55dceb229edbeb52bace04141f9e0bddbafe0afaf2dbe` |This smart contract allows users to claim profits after items are sold on Shopify.|


