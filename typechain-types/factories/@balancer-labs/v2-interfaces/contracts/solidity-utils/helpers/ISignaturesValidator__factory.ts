/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ISignaturesValidator,
  ISignaturesValidatorInterface,
} from "../../../../../../@balancer-labs/v2-interfaces/contracts/solidity-utils/helpers/ISignaturesValidator";

const _abi = [
  {
    inputs: [],
    name: "getDomainSeparator",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNextNonce",
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

export class ISignaturesValidator__factory {
  static readonly abi = _abi;
  static createInterface(): ISignaturesValidatorInterface {
    return new Interface(_abi) as ISignaturesValidatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ISignaturesValidator {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ISignaturesValidator;
  }
}