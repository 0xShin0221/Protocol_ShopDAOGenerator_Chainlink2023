/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  DaoFactory,
  DaoFactoryInterface,
} from "../../../src/DAOFactory/DaoFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vote_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_timeLock_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dao_address",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "vote",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "createdTime",
        type: "uint256",
      },
    ],
    name: "Create",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BRAND_MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DAO_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VOTE_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "daoName",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vote_maximumSupply",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "vote_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "vote_symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "vote_URI",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timelock_minDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governance_votingDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governance_votingPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governance_quorumPercentage",
            type: "uint256",
          },
        ],
        internalType: "struct IDaoFactory.createParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "daoStorage",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "vote",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        internalType: "address",
        name: "dao",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "createdTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "executorList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "fetchDaoStoage",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "vote",
            type: "address",
          },
          {
            internalType: "address",
            name: "timelock",
            type: "address",
          },
          {
            internalType: "address",
            name: "dao",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "createdTime",
            type: "uint256",
          },
        ],
        internalType: "struct DaoFactory.DAO[]",
        name: "daolist",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposerList",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60016002819055610100604052600060e090815262000022916004919062000181565b503480156200003057600080fd5b50604051620018e2380380620018e283398101604081905262000053916200021f565b6001600160a01b0380841660805282811660a052811660c05262000079600033620000e0565b620000d7604051602001620000b4906020808252601290820152714252414e445f4d414e414745525f524f4c4560701b604082015260600190565b6040516020818303038152906040528051906020012033620000e060201b60201c565b50505062000269565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166200017d576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200013c3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b828054828255906000526020600020908101928215620001d9579160200282015b82811115620001d957825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190620001a2565b50620001e7929150620001eb565b5090565b5b80821115620001e75760008155600101620001ec565b80516001600160a01b03811681146200021a57600080fd5b919050565b6000806000606084860312156200023557600080fd5b620002408462000202565b9250620002506020850162000202565b9150620002606040850162000202565b90509250925092565b60805160a05160c051611634620002ae600039600081816102e101526107800152600081816101e501526107530152600081816101a6015261072601526116346000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063a217fddf116100b2578063da561f4511610081578063eea9eda311610066578063eea9eda3146102a5578063f60e6cb8146102b8578063f68ded66146102dc57600080fd5b8063da561f451461028a578063e03f6e521461029257600080fd5b8063a217fddf14610253578063a303c96f1461025b578063af640d0f1461026e578063d547741f1461027757600080fd5b80633f7df3ff116100ee5780633f7df3ff146101a1578063431c1830146101e0578063716059811461020757806391d148541461021c57600080fd5b806301ffc9a714610120578063248a9ca3146101485780632f2ff15d1461017957806336568abe1461018e575b600080fd5b61013361012e36600461104e565b610303565b60405190151581526020015b60405180910390f35b61016b610156366004611090565b60009081526020819052604090206001015490565b60405190815260200161013f565b61018c6101873660046110c0565b61039c565b005b61018c61019c3660046110c0565b6103c6565b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161013f565b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b61020f610457565b60405161013f9190611148565b61013361022a3660046110c0565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b61016b600081565b6101c8610269366004611090565b610606565b61016b60025481565b61018c6102853660046110c0565b610630565b61016b610655565b6101c86102a0366004611090565b6106af565b61018c6102b33660046111ed565b6106bf565b6102cb6102c6366004611090565b610ab6565b60405161013f959493929190611229565b6101c87f000000000000000000000000000000000000000000000000000000000000000081565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061039657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000828152602081905260409020600101546103b781610b7d565b6103c18383610b8a565b505050565b6001600160a01b03811633146104495760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6104538282610c28565b5050565b60606000600160025461046a9190611280565b905060018167ffffffffffffffff81111561048757610487611297565b6040519080825280602002602001820160405280156104e157816020015b6040805160a081018252606080825260006020808401829052938301819052908201819052608082015282526000199092019101816104a55790505b50925060005b828110156106005760008181526020839052604090819020815160a08101909252805482908290610517906112ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610543906112ad565b80156105905780601f1061056557610100808354040283529160200191610590565b820191906000526020600020905b81548152906001019060200180831161057357829003601f168201915b505050918352505060018201546001600160a01b039081166020830152600283015481166040830152600383015416606082015260049091015460809091015284518590839081106105e4576105e46112e8565b6020026020010181905250806105f9906112fe565b90506104e7565b50505090565b6004818154811061061657600080fd5b6000918252602090912001546001600160a01b0316905081565b60008281526020819052604090206001015461064b81610b7d565b6103c18383610c28565b6040516020016106969060208082526012908201527f4252414e445f4d414e414745525f524f4c450000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012081565b6003818154811061061657600080fd5b6040516020016107009060208082526012908201527f4252414e445f4d414e414745525f524f4c450000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012061071f81610b7d565b600061074a7f0000000000000000000000000000000000000000000000000000000000000000610ca7565b905060006107777f0000000000000000000000000000000000000000000000000000000000000000610ca7565b905060006107a47f0000000000000000000000000000000000000000000000000000000000000000610ca7565b6040805160a08101909152909150806107bd8780611319565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509385525050506001600160a01b03808716602080850191909152868216604080860191909152918616606085015242608090940193909352600254825260018352902082518051919261084592849290910190610fb5565b506020828101516001830180547fffffffffffffffffffffffff00000000000000000000000000000000000000009081166001600160a01b039384161790915560408086015160028601805484169185169190911790556060860151600386018054909316908416179091556080909401516004909301929092559085169163f2bc2bd3916108d8918901908901611367565b60408801356108ea60608a018a611319565b6108f760808c018c611319565b61090460a08e018e611319565b6040518963ffffffff1660e01b81526004016109279897969594939291906113ab565b600060405180830381600087803b15801561094157600080fd5b505af1158015610955573d6000803e3d6000fd5b5050506001600160a01b03831690506393cb6a8a60c08701356003600461098260408b0160208c01611367565b6040518563ffffffff1660e01b81526004016109a19493929190611454565b600060405180830381600087803b1580156109bb57600080fd5b505af11580156109cf573d6000803e3d6000fd5b5050506001600160a01b03821690506368ae8de96109ed8780611319565b86868a60e001358b61010001358c61012001356040518863ffffffff1660e01b8152600401610a22979695949392919061149a565b600060405180830381600087803b158015610a3c57600080fd5b505af1158015610a50573d6000803e3d6000fd5b505060028054925090506000610a65836112fe565b909155507e48209bd46e9c7af682cae0cfbd459137e1a1d6cfe0b90f9767f3ef1c6f6bf0610a938780611319565b848742604051610aa79594939291906114e4565b60405180910390a25050505050565b600160205260009081526040902080548190610ad1906112ad565b80601f0160208091040260200160405190810160405280929190818152602001828054610afd906112ad565b8015610b4a5780601f10610b1f57610100808354040283529160200191610b4a565b820191906000526020600020905b815481529060010190602001808311610b2d57829003601f168201915b50505060018401546002850154600386015460049096015494956001600160a01b03928316959183169450909116915085565b610b878133610d48565b50565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16610453576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610be43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1615610453576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b038116610d435760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c6564000000000000000000006044820152606401610440565b919050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661045357610d7981610dbb565b610d84836020610dcd565b604051602001610d9592919061151c565b60408051601f198184030181529082905262461bcd60e51b82526104409160040161159d565b60606103966001600160a01b03831660145b60606000610ddc8360026115b0565b610de79060026115cf565b67ffffffffffffffff811115610dff57610dff611297565b6040519080825280601f01601f191660200182016040528015610e29576020820181803683370190505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110610e6057610e606112e8565b60200101906001600160f81b031916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110610eab57610eab6112e8565b60200101906001600160f81b031916908160001a9053506000610ecf8460026115b0565b610eda9060016115cf565b90505b6001811115610f5f577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610f1b57610f1b6112e8565b1a60f81b828281518110610f3157610f316112e8565b60200101906001600160f81b031916908160001a90535060049490941c93610f58816115e7565b9050610edd565b508315610fae5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610440565b9392505050565b828054610fc1906112ad565b90600052602060002090601f016020900481019282610fe35760008555611029565b82601f10610ffc57805160ff1916838001178555611029565b82800160010185558215611029579182015b8281111561102957825182559160200191906001019061100e565b50611035929150611039565b5090565b5b80821115611035576000815560010161103a565b60006020828403121561106057600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114610fae57600080fd5b6000602082840312156110a257600080fd5b5035919050565b80356001600160a01b0381168114610d4357600080fd5b600080604083850312156110d357600080fd5b823591506110e3602084016110a9565b90509250929050565b60005b838110156111075781810151838201526020016110ef565b83811115611116576000848401525b50505050565b600081518084526111348160208601602086016110ec565b601f01601f19169290920160200192915050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b838110156111df57603f19898403018552815160a081518186526111958287018261111c565b838b01516001600160a01b03908116888d01528a85015181168b8901526060808601519091169088015260809384015193909601929092525050938601939086019060010161116f565b509098975050505050505050565b6000602082840312156111ff57600080fd5b813567ffffffffffffffff81111561121657600080fd5b82016101408185031215610fae57600080fd5b60a08152600061123c60a083018861111c565b6001600160a01b03968716602084015294861660408301525091909316606082015260800191909152919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156112925761129261126a565b500390565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806112c157607f821691505b602082108114156112e257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156113125761131261126a565b5060010190565b6000808335601e1984360301811261133057600080fd5b83018035915067ffffffffffffffff82111561134b57600080fd5b60200191503681900382131561136057600080fd5b9250929050565b60006020828403121561137957600080fd5b610fae826110a9565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038916815287602082015260a0604082015260006113d460a08301888a611382565b82810360608401526113e7818789611382565b905082810360808401526113fc818587611382565b9b9a5050505050505050505050565b6000815480845260208085019450836000528060002060005b838110156114495781546001600160a01b031687529582019560019182019101611424565b509495945050505050565b84815260806020820152600061146d608083018661140b565b828103604084015261147f818661140b565b9150506001600160a01b038316606083015295945050505050565b60c0815260006114ae60c08301898b611382565b6001600160a01b0397881660208401529590961660408201526060810193909352608083019190915260a0909101529392505050565b6080815260006114f8608083018789611382565b6001600160a01b039586166020840152939094166040820152606001529392505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516115548160178501602088016110ec565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516115918160288401602088016110ec565b01602801949350505050565b602081526000610fae602083018461111c565b60008160001904831182151516156115ca576115ca61126a565b500290565b600082198211156115e2576115e261126a565b500190565b6000816115f6576115f661126a565b50600019019056fea2646970667358221220e740f9748cc76040f10166fc18ba38af452732b39a7b7967778b3bff5c7715b364736f6c63430008090033";

type DaoFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DaoFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DaoFactory__factory extends ContractFactory {
  constructor(...args: DaoFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vote_address: PromiseOrValue<string>,
    _timeLock_address: PromiseOrValue<string>,
    _dao_address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DaoFactory> {
    return super.deploy(
      _vote_address,
      _timeLock_address,
      _dao_address,
      overrides || {}
    ) as Promise<DaoFactory>;
  }
  override getDeployTransaction(
    _vote_address: PromiseOrValue<string>,
    _timeLock_address: PromiseOrValue<string>,
    _dao_address: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _vote_address,
      _timeLock_address,
      _dao_address,
      overrides || {}
    );
  }
  override attach(address: string): DaoFactory {
    return super.attach(address) as DaoFactory;
  }
  override connect(signer: Signer): DaoFactory__factory {
    return super.connect(signer) as DaoFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DaoFactoryInterface {
    return new utils.Interface(_abi) as DaoFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DaoFactory {
    return new Contract(address, _abi, signerOrProvider) as DaoFactory;
  }
}
