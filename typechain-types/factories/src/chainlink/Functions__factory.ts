/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Functions,
  FunctionsInterface,
} from "../../../src/chainlink/Functions";

const _abi = [
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyUrl",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122074157b78825107d9d2fc0a3b572018e568f374bbefbaaf5a990738745abb8c5e64736f6c63430008090033";

type FunctionsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Functions__factory extends ContractFactory {
  constructor(...args: FunctionsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Functions> {
    return super.deploy(overrides || {}) as Promise<Functions>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Functions {
    return super.attach(address) as Functions;
  }
  override connect(signer: Signer): Functions__factory {
    return super.connect(signer) as Functions__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionsInterface {
    return new utils.Interface(_abi) as FunctionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Functions {
    return new Contract(address, _abi, signerOrProvider) as Functions;
  }
}
