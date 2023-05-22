/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  BasicToken,
  BasicTokenInterface,
} from "../../../../../../../lib/chainlink/contracts/src/v0.4/vendor/BasicToken";

const _abi = [
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
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
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
  "0x608060405234801561001057600080fd5b5061023e806100206000396000f3006080604052600436106100565763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166318160ddd811461005b57806370a0823114610082578063a9059cbb146100b0575b600080fd5b34801561006757600080fd5b506100706100f5565b60408051918252519081900360200190f35b34801561008e57600080fd5b5061007073ffffffffffffffffffffffffffffffffffffffff600435166100fb565b3480156100bc57600080fd5b506100e173ffffffffffffffffffffffffffffffffffffffff60043516602435610123565b604080519115158252519081900360200190f35b60005481565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b33600090815260016020526040812054610143908363ffffffff6101ed16565b336000908152600160205260408082209290925573ffffffffffffffffffffffffffffffffffffffff851681522054610182908363ffffffff6101ff16565b73ffffffffffffffffffffffffffffffffffffffff84166000818152600160209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b6000828211156101f957fe5b50900390565b8181018281101561020c57fe5b929150505600a165627a7a72305820c176709aee92b8178eb03eb2c2305c14316ef3af126e66ee7e1c1a649c166e990029";

type BasicTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicToken__factory extends ContractFactory {
  constructor(...args: BasicTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicToken> {
    return super.deploy(overrides || {}) as Promise<BasicToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BasicToken {
    return super.attach(address) as BasicToken;
  }
  override connect(signer: Signer): BasicToken__factory {
    return super.connect(signer) as BasicToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicTokenInterface {
    return new utils.Interface(_abi) as BasicTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicToken {
    return new Contract(address, _abi, signerOrProvider) as BasicToken;
  }
}
