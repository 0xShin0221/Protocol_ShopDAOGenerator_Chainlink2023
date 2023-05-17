/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TargetContract,
  TargetContractInterface,
} from "../../../src/targetContract/TargetContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060b18061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80633fa4f24514603757806355241077146051575b600080fd5b603f60005481565b60405190815260200160405180910390f35b6061605c3660046063565b600055565b005b600060208284031215607457600080fd5b503591905056fea26469706673582212204f713ea2699b5f8b821110734ef21ecbd6e7a29b2815102bc1e29d8a59c6747f64736f6c63430008090033";

type TargetContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TargetContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TargetContract__factory extends ContractFactory {
  constructor(...args: TargetContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TargetContract> {
    return super.deploy(overrides || {}) as Promise<TargetContract>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TargetContract {
    return super.attach(address) as TargetContract;
  }
  override connect(signer: Signer): TargetContract__factory {
    return super.connect(signer) as TargetContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TargetContractInterface {
    return new utils.Interface(_abi) as TargetContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TargetContract {
    return new Contract(address, _abi, signerOrProvider) as TargetContract;
  }
}
