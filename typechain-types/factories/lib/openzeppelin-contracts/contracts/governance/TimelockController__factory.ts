/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TimelockController,
  TimelockControllerInterface,
} from "../../../../../lib/openzeppelin-contracts/contracts/governance/TimelockController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "admin",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
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
    name: "CANCELLER_ROLE",
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
    name: "EXECUTOR_ROLE",
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
    name: "PROPOSER_ROLE",
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
    name: "TIMELOCK_ADMIN_ROLE",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "payload",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
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
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "registered",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "payloads",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200266138038062002661833981016040819052620000349162000408565b6200004f600080516020620025e1833981519152806200022d565b6200007960008051602062002601833981519152600080516020620025e18339815191526200022d565b620000a360008051602062002621833981519152600080516020620025e18339815191526200022d565b620000cd60008051602062002641833981519152600080516020620025e18339815191526200022d565b620000e8600080516020620025e18339815191523062000278565b6001600160a01b03811615620001135762000113600080516020620025e18339815191528262000278565b60005b835181101562000199576200015d600080516020620026018339815191528583815181106200014957620001496200048f565b60200260200101516200027860201b60201c565b62000186600080516020620026418339815191528583815181106200014957620001496200048f565b6200019181620004a5565b905062000116565b5060005b8251811015620001e357620001d0600080516020620026218339815191528483815181106200014957620001496200048f565b620001db81620004a5565b90506200019d565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150505050620004cf565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b62000284828262000288565b5050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1662000284576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002e43390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200035657600080fd5b919050565b600082601f8301126200036d57600080fd5b815160206001600160401b03808311156200038c576200038c62000328565b8260051b604051601f19603f83011681018181108482111715620003b457620003b462000328565b604052938452858101830193838101925087851115620003d357600080fd5b83870191505b84821015620003fd57620003ed826200033e565b83529183019190830190620003d9565b979650505050505050565b600080600080608085870312156200041f57600080fd5b845160208601519094506001600160401b03808211156200043f57600080fd5b6200044d888389016200035b565b945060408701519150808211156200046457600080fd5b5062000473878288016200035b565b92505062000484606086016200033e565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b6000600019821415620004c857634e487b7160e01b600052601160045260246000fd5b5060010190565b61210280620004df6000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f146105d8578063e38335e5146105f8578063f23a6e611461060b578063f27a0c921461065057600080fd5b8063bc197c8114610546578063c4d252f51461058b578063d45c4435146105ab57600080fd5b806391d14854116100c657806391d1485414610499578063a217fddf146104dd578063b08e51c0146104f2578063b1c5f4271461052657600080fd5b80638065657f146104255780638f2a0bb0146104455780638f61f4f51461046557600080fd5b8063248a9ca31161015957806331d507501161013357806331d50750146103a557806336568abe146103c5578063584b153e146103e557806364d623531461040557600080fd5b8063248a9ca3146103245780632ab0f529146103545780632f2ff15d1461038557600080fd5b80630d3cf6fc116101955780630d3cf6fc14610260578063134008d31461029457806313bc9f20146102a7578063150b7a02146102c757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e2366004611754565b610665565b005b3480156101f557600080fd5b506102096102043660046117c9565b6106fa565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b34801561026c57600080fd5b506102527f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101e76102a23660046117f3565b61073e565b3480156102b357600080fd5b506102096102c236600461185f565b610836565b3480156102d357600080fd5b5061030b6102e236600461192f565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040516001600160e01b03199091168152602001610215565b34801561033057600080fd5b5061025261033f36600461185f565b60009081526020819052604090206001015490565b34801561036057600080fd5b5061020961036f36600461185f565b6000908152600160208190526040909120541490565b34801561039157600080fd5b506101e76103a0366004611997565b61085c565b3480156103b157600080fd5b506102096103c036600461185f565b610886565b3480156103d157600080fd5b506101e76103e0366004611997565b61089f565b3480156103f157600080fd5b5061020961040036600461185f565b610930565b34801561041157600080fd5b506101e761042036600461185f565b610946565b34801561043157600080fd5b506102526104403660046117f3565b6109fc565b34801561045157600080fd5b506101e7610460366004611a08565b610a3b565b34801561047157600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b3480156104a557600080fd5b506102096104b4366004611997565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104e957600080fd5b50610252600081565b3480156104fe57600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b34801561053257600080fd5b50610252610541366004611aba565b610c05565b34801561055257600080fd5b5061030b610561366004611be3565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b34801561059757600080fd5b506101e76105a636600461185f565b610c4a565b3480156105b757600080fd5b506102526105c636600461185f565b60009081526001602052604090205490565b3480156105e457600080fd5b506101e76105f3366004611997565b610d2b565b6101e7610606366004611aba565b610d50565b34801561061757600080fd5b5061030b610626366004611c8d565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b34801561065c57600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161068f81610f95565b600061069f8989898989896109fc565b90506106ab8184610fa2565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106e796959493929190611d1b565b60405180910390a3505050505050505050565b60006001600160e01b031982167f4e2312e00000000000000000000000000000000000000000000000000000000014806107385750610738826110b6565b92915050565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff166107bb576107bb813361111d565b60006107cb8888888888886109fc565b90506107d78185611190565b6107e388888888611286565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a60405161081b9493929190611d59565b60405180910390a361082c81611363565b5050505050505050565b6000818152600160205260408120546001811180156108555750428111155b9392505050565b60008281526020819052604090206001015461087781610f95565b61088183836113df565b505050565b60008181526001602052604081205481905b1192915050565b6001600160a01b03811633146109225760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61092c828261147d565b5050565b6000818152600160208190526040822054610898565b3330146109bb5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b0000000000000000000000000000000000000000006064820152608401610919565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b6000868686868686604051602001610a1996959493929190611d1b565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610a6581610f95565b888714610ac05760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608401610919565b888514610b1b5760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608401610919565b6000610b2d8b8b8b8b8b8b8b8b610c05565b9050610b398184610fa2565b60005b8a811015610bf75780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610b7957610b79611d8c565b9050602002016020810190610b8e9190611da2565b8d8d86818110610ba057610ba0611d8c565b905060200201358c8c87818110610bb957610bb9611d8c565b9050602002810190610bcb9190611dbd565b8c8b604051610bdf96959493929190611d1b565b60405180910390a3610bf081611e1a565b9050610b3c565b505050505050505050505050565b60008888888888888888604051602001610c26989796959493929190611ec6565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610c7481610f95565b610c7d82610930565b610cef5760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c65640000000000000000000000000000006064820152608401610919565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610d4681610f95565b610881838361147d565b600080527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610dcd57610dcd813361111d565b878614610e285760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608401610919565b878414610e835760405162461bcd60e51b815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616044820152620e8c6d60eb1b6064820152608401610919565b6000610e958a8a8a8a8a8a8a8a610c05565b9050610ea18185611190565b60005b89811015610f7f5760008b8b83818110610ec057610ec0611d8c565b9050602002016020810190610ed59190611da2565b905060008a8a84818110610eeb57610eeb611d8c565b9050602002013590503660008a8a86818110610f0957610f09611d8c565b9050602002810190610f1b9190611dbd565b91509150610f2b84848484611286565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610f629493929190611d59565b60405180910390a35050505080610f7890611e1a565b9050610ea4565b50610f8981611363565b50505050505050505050565b610f9f813361111d565b50565b610fab82610886565b1561101e5760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c656400000000000000000000000000000000006064820152608401610919565b6002548110156110965760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c617900000000000000000000000000000000000000000000000000006064820152608401610919565b6110a08142611f8a565b6000928352600160205260409092209190915550565b60006001600160e01b031982167f7965db0b00000000000000000000000000000000000000000000000000000000148061073857507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b0319831614610738565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661092c5761114e816114fc565b61115983602061150e565b60405160200161116a929190611fd2565b60408051601f198184030181529082905262461bcd60e51b825261091991600401612053565b61119982610836565b6111f85760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b6064820152608401610919565b8015806112145750600081815260016020819052604090912054145b61092c5760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e637900000000000000000000000000000000000000000000000000006064820152608401610919565b6000846001600160a01b03168484846040516112a3929190612086565b60006040518083038185875af1925050503d80600081146112e0576040519150601f19603f3d011682016040523d82523d6000602084013e6112e5565b606091505b505090508061135c5760405162461bcd60e51b815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e207265766572746564000000000000000000000000006064820152608401610919565b5050505050565b61136c81610836565b6113cb5760405162461bcd60e51b815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604482015269206e6f7420726561647960b01b6064820152608401610919565b600090815260016020819052604090912055565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661092c576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556114393390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260408083206001600160a01b038516845290915290205460ff161561092c576000828152602081815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60606107386001600160a01b03831660145b6060600061151d836002612096565b611528906002611f8a565b67ffffffffffffffff81111561154057611540611878565b6040519080825280601f01601f19166020018201604052801561156a576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106115a1576115a1611d8c565b60200101906001600160f81b031916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106115ec576115ec611d8c565b60200101906001600160f81b031916908160001a9053506000611610846002612096565b61161b906001611f8a565b90505b60018111156116a0577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061165c5761165c611d8c565b1a60f81b82828151811061167257611672611d8c565b60200101906001600160f81b031916908160001a90535060049490941c93611699816120b5565b905061161e565b5083156108555760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610919565b80356001600160a01b038116811461170657600080fd5b919050565b60008083601f84011261171d57600080fd5b50813567ffffffffffffffff81111561173557600080fd5b60208301915083602082850101111561174d57600080fd5b9250929050565b600080600080600080600060c0888a03121561176f57600080fd5b611778886116ef565b965060208801359550604088013567ffffffffffffffff81111561179b57600080fd5b6117a78a828b0161170b565b989b979a50986060810135976080820135975060a09091013595509350505050565b6000602082840312156117db57600080fd5b81356001600160e01b03198116811461085557600080fd5b60008060008060008060a0878903121561180c57600080fd5b611815876116ef565b955060208701359450604087013567ffffffffffffffff81111561183857600080fd5b61184489828a0161170b565b979a9699509760608101359660809091013595509350505050565b60006020828403121561187157600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156118b7576118b7611878565b604052919050565b600082601f8301126118d057600080fd5b813567ffffffffffffffff8111156118ea576118ea611878565b6118fd601f8201601f191660200161188e565b81815284602083860101111561191257600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561194557600080fd5b61194e856116ef565b935061195c602086016116ef565b925060408501359150606085013567ffffffffffffffff81111561197f57600080fd5b61198b878288016118bf565b91505092959194509250565b600080604083850312156119aa57600080fd5b823591506119ba602084016116ef565b90509250929050565b60008083601f8401126119d557600080fd5b50813567ffffffffffffffff8111156119ed57600080fd5b6020830191508360208260051b850101111561174d57600080fd5b600080600080600080600080600060c08a8c031215611a2657600080fd5b893567ffffffffffffffff80821115611a3e57600080fd5b611a4a8d838e016119c3565b909b50995060208c0135915080821115611a6357600080fd5b611a6f8d838e016119c3565b909950975060408c0135915080821115611a8857600080fd5b50611a958c828d016119c3565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b031215611ad657600080fd5b883567ffffffffffffffff80821115611aee57600080fd5b611afa8c838d016119c3565b909a50985060208b0135915080821115611b1357600080fd5b611b1f8c838d016119c3565b909850965060408b0135915080821115611b3857600080fd5b50611b458b828c016119c3565b999c989b509699959896976060870135966080013595509350505050565b600082601f830112611b7457600080fd5b8135602067ffffffffffffffff821115611b9057611b90611878565b8160051b611b9f82820161188e565b9283528481018201928281019087851115611bb957600080fd5b83870192505b84831015611bd857823582529183019190830190611bbf565b979650505050505050565b600080600080600060a08688031215611bfb57600080fd5b611c04866116ef565b9450611c12602087016116ef565b9350604086013567ffffffffffffffff80821115611c2f57600080fd5b611c3b89838a01611b63565b94506060880135915080821115611c5157600080fd5b611c5d89838a01611b63565b93506080880135915080821115611c7357600080fd5b50611c80888289016118bf565b9150509295509295909350565b600080600080600060a08688031215611ca557600080fd5b611cae866116ef565b9450611cbc602087016116ef565b93506040860135925060608601359150608086013567ffffffffffffffff811115611ce657600080fd5b611c80888289016118bf565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038716815285602082015260a060408201526000611d4460a083018688611cf2565b60608301949094525060800152949350505050565b6001600160a01b0385168152836020820152606060408201526000611d82606083018486611cf2565b9695505050505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611db457600080fd5b610855826116ef565b6000808335601e19843603018112611dd457600080fd5b83018035915067ffffffffffffffff821115611def57600080fd5b60200191503681900382131561174d57600080fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611e2e57611e2e611e04565b5060010190565b81835260006020808501808196508560051b810191508460005b87811015611eb95782840389528135601e19883603018112611e7057600080fd5b8701803567ffffffffffffffff811115611e8957600080fd5b803603891315611e9857600080fd5b611ea58682898501611cf2565b9a87019a9550505090840190600101611e4f565b5091979650505050505050565b60a0808252810188905260008960c08301825b8b811015611f07576001600160a01b03611ef2846116ef565b16825260209283019290910190600101611ed9565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611f4057600080fd5b8860051b9150818a602083013781810191505060208101600081526020848303016040850152611f7181888a611e35565b6060850196909652505050608001529695505050505050565b60008219821115611f9d57611f9d611e04565b500190565b60005b83811015611fbd578181015183820152602001611fa5565b83811115611fcc576000848401525b50505050565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161200a816017850160208801611fa2565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612047816028840160208801611fa2565b01602801949350505050565b6020815260008251806020840152612072816040850160208701611fa2565b601f01601f19169190910160400192915050565b8183823760009101908152919050565b60008160001904831182151516156120b0576120b0611e04565b500290565b6000816120c4576120c4611e04565b50600019019056fea26469706673582212207b4c3f6fadfcbef1c6fd4329ba6757815bc648a2d0871566bea0ffeb5ac32e4764736f6c634300080900335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";

type TimelockControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TimelockController__factory extends ContractFactory {
  constructor(...args: TimelockControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TimelockController> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    ) as Promise<TimelockController>;
  }
  override getDeployTransaction(
    minDelay: PromiseOrValue<BigNumberish>,
    proposers: PromiseOrValue<string>[],
    executors: PromiseOrValue<string>[],
    admin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      admin,
      overrides || {}
    );
  }
  override attach(address: string): TimelockController {
    return super.attach(address) as TimelockController;
  }
  override connect(signer: Signer): TimelockController__factory {
    return super.connect(signer) as TimelockController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockControllerInterface {
    return new utils.Interface(_abi) as TimelockControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockController {
    return new Contract(address, _abi, signerOrProvider) as TimelockController;
  }
}
