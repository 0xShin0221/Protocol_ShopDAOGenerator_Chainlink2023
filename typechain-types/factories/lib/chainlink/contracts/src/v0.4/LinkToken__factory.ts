/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  LinkToken,
  LinkTokenInterface,
} from "../../../../../../lib/chainlink/contracts/src/v0.4/LinkToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_from",
        type: "address",
      },
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "transferAndCall",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseApproval",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_spender",
        type: "address",
      },
      {
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseApproval",
    outputs: [
      {
        name: "success",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
      {
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "remaining",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        name: "data",
        type: "bytes",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b503360009081526001602052604090206b033b2e3c9fd0803ce80000009055610aca8061003e6000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100be578063095ea7b31461014857806318160ddd1461018057806323b872dd146101a7578063313ce567146101d15780634000aea0146101fc578063661884631461026557806370a082311461028957806395d89b41146102aa578063a9059cbb146102bf578063d73dd623146102e3578063dd62ed3e14610307575b600080fd5b3480156100ca57600080fd5b506100d361032e565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010d5781810151838201526020016100f5565b50505050905090810190601f16801561013a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561015457600080fd5b5061016c600160a060020a0360043516602435610365565b604080519115158252519081900360200190f35b34801561018c57600080fd5b506101956103a6565b60408051918252519081900360200190f35b3480156101b357600080fd5b5061016c600160a060020a03600435811690602435166044356103b6565b3480156101dd57600080fd5b506101e66103f9565b6040805160ff9092168252519081900360200190f35b34801561020857600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261016c948235600160a060020a03169460248035953695946064949201919081908401838280828437509497506103fe9650505050505050565b34801561027157600080fd5b5061016c600160a060020a0360043516602435610438565b34801561029557600080fd5b50610195600160a060020a0360043516610528565b3480156102b657600080fd5b506100d3610543565b3480156102cb57600080fd5b5061016c600160a060020a036004351660243561057a565b3480156102ef57600080fd5b5061016c600160a060020a03600435166024356105b3565b34801561031357600080fd5b50610195600160a060020a036004358116906024351661064c565b60408051808201909152600f81527f436861696e4c696e6b20546f6b656e0000000000000000000000000000000000602082015281565b600082600160a060020a038116158015906103895750600160a060020a0381163014155b151561039457600080fd5b61039e8484610677565b949350505050565b6b033b2e3c9fd0803ce800000081565b600082600160a060020a038116158015906103da5750600160a060020a0381163014155b15156103e557600080fd5b6103f08585856106dd565b95945050505050565b601281565b600083600160a060020a038116158015906104225750600160a060020a0381163014155b151561042d57600080fd5b6103f08585856107e9565b336000908152600260209081526040808320600160a060020a03861684529091528120548083111561048d57336000908152600260209081526040808320600160a060020a03881684529091528120556104c2565b61049d818463ffffffff6108ce16565b336000908152600260209081526040808320600160a060020a03891684529091529020555b336000818152600260209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526001602052604090205490565b60408051808201909152600481527f4c494e4b00000000000000000000000000000000000000000000000000000000602082015281565b600082600160a060020a0381161580159061059e5750600160a060020a0381163014155b15156105a957600080fd5b61039e84846108e0565b336000908152600260209081526040808320600160a060020a03861684529091528120546105e7908363ffffffff61099016565b336000818152600260209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b336000818152600260209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b600160a060020a0383166000818152600260209081526040808320338452825280832054938352600190915281205490919061071f908463ffffffff6108ce16565b600160a060020a038087166000908152600160205260408082209390935590861681522054610754908463ffffffff61099016565b600160a060020a03851660009081526001602052604090205561077d818463ffffffff6108ce16565b600160a060020a03808716600081815260026020908152604080832033845282529182902094909455805187815290519288169391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929181900390910190a3506001949350505050565b60006107f584846108e0565b5083600160a060020a031633600160a060020a03167fe19260aff97b920c7df27010903aeb9c8d2be5d310a2c67824cf3f15396e4c1685856040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610870578181015183820152602001610858565b50505050905090810190601f16801561089d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390a36108b4846109a3565b156108c4576108c48484846109ab565b5060019392505050565b6000828211156108da57fe5b50900390565b33600090815260016020526040812054610900908363ffffffff6108ce16565b3360009081526001602052604080822092909255600160a060020a03851681522054610932908363ffffffff61099016565b600160a060020a0384166000818152600160209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b8181018281101561099d57fe5b92915050565b6000903b1190565b6040517fa4c0ed360000000000000000000000000000000000000000000000000000000081523360048201818152602483018590526060604484019081528451606485015284518794600160a060020a0386169463a4c0ed369490938993899360840190602085019080838360005b83811015610a32578181015183820152602001610a1a565b50505050905090810190601f168015610a5f5780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610a8057600080fd5b505af1158015610a94573d6000803e3d6000fd5b50505050505050505600a165627a7a72305820236d0911236ef0b7ed3f1da3dd1188dd363fcc48ee1d071ca18643516c1f952b0029";

type LinkTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinkTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LinkToken__factory extends ContractFactory {
  constructor(...args: LinkTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LinkToken> {
    return super.deploy(overrides || {}) as Promise<LinkToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LinkToken {
    return super.attach(address) as LinkToken;
  }
  override connect(signer: Signer): LinkToken__factory {
    return super.connect(signer) as LinkToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinkTokenInterface {
    return new utils.Interface(_abi) as LinkTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinkToken {
    return new Contract(address, _abi, signerOrProvider) as LinkToken;
  }
}
