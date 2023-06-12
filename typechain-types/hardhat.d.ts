/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC677Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Token__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Basic",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Basic__factory>;
    getContractFactory(
      name: "ERC677",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677__factory>;
    getContractFactory(
      name: "ERC677Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677Receiver__factory>;
    getContractFactory(
      name: "LinkToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkToken__factory>;
    getContractFactory(
      name: "BasicToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasicToken__factory>;
    getContractFactory(
      name: "StandardToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StandardToken__factory>;
    getContractFactory(
      name: "AggregatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorInterface__factory>;
    getContractFactory(
      name: "AggregatorV2V3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV2V3Interface__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "MockV3Aggregator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockV3Aggregator__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "OCR2Abstract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OCR2Abstract__factory>;
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "ERC677ReceiverInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC677ReceiverInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OwnableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableInterface__factory>;
    getContractFactory(
      name: "TypeAndVersionInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TypeAndVersionInterface__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IGovernorTimelock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorTimelock__factory>;
    getContractFactory(
      name: "IGovernor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernor__factory>;
    getContractFactory(
      name: "TimelockController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TimelockController__factory>;
    getContractFactory(
      name: "IVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVotes__factory>;
    getContractFactory(
      name: "Votes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Votes__factory>;
    getContractFactory(
      name: "IERC1822Proxiable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822Proxiable__factory>;
    getContractFactory(
      name: "IERC1967",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967__factory>;
    getContractFactory(
      name: "IBeacon",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeacon__factory>;
    getContractFactory(
      name: "ERC1967Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Proxy__factory>;
    getContractFactory(
      name: "ERC1967Upgrade",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967Upgrade__factory>;
    getContractFactory(
      name: "Proxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Proxy__factory>;
    getContractFactory(
      name: "ProxyAdmin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProxyAdmin__factory>;
    getContractFactory(
      name: "ITransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "TransparentUpgradeableProxy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TransparentUpgradeableProxy__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "DoubleEndedQueue",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DoubleEndedQueue__factory>;
    getContractFactory(
      name: "AuthorizedReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuthorizedReceiver__factory>;
    getContractFactory(
      name: "AuthorizedOriginReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuthorizedOriginReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ConfirmedOwnerUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerUpgradeable__factory>;
    getContractFactory(
      name: "Functions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Functions__factory>;
    getContractFactory(
      name: "FunctionsBillingRegistry",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsBillingRegistry__factory>;
    getContractFactory(
      name: "FunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClient__factory>;
    getContractFactory(
      name: "FunctionsOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsOracle__factory>;
    getContractFactory(
      name: "AuthorizedOriginReceiverInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuthorizedOriginReceiverInterface__factory>;
    getContractFactory(
      name: "AuthorizedReceiverInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AuthorizedReceiverInterface__factory>;
    getContractFactory(
      name: "FunctionsBillingRegistryInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsBillingRegistryInterface__factory>;
    getContractFactory(
      name: "FunctionsClientInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClientInterface__factory>;
    getContractFactory(
      name: "FunctionsOracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsOracleInterface__factory>;
    getContractFactory(
      name: "OCR2Base",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OCR2Base__factory>;
    getContractFactory(
      name: "OCR2BaseUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OCR2BaseUpgradeable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "Functions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Functions__factory>;
    getContractFactory(
      name: "FunctionsClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClient__factory>;
    getContractFactory(
      name: "FunctionsConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsConsumer__factory>;
    getContractFactory(
      name: "ProductRegistConsumer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProductRegistConsumer__factory>;
    getContractFactory(
      name: "SalesDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SalesDistributor__factory>;
    getContractFactory(
      name: "DaoFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DaoFactory__factory>;
    getContractFactory(
      name: "EIP712C",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EIP712C__factory>;
    getContractFactory(
      name: "GovernorCountingSimpleC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorCountingSimpleC__factory>;
    getContractFactory(
      name: "GovernorSettingsC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorSettingsC__factory>;
    getContractFactory(
      name: "GovernorTimelockControlC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorTimelockControlC__factory>;
    getContractFactory(
      name: "GovernorVotesC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesC__factory>;
    getContractFactory(
      name: "GovernorVotesQuorumFractionC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorVotesQuorumFractionC__factory>;
    getContractFactory(
      name: "GovernorC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorC__factory>;
    getContractFactory(
      name: "GovernanceTimeLock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernanceTimeLock__factory>;
    getContractFactory(
      name: "GovernorContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernorContract__factory>;
    getContractFactory(
      name: "FunctionsBillingRegistryInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsBillingRegistryInterface__factory>;
    getContractFactory(
      name: "FunctionsClientInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsClientInterface__factory>;
    getContractFactory(
      name: "FunctionsOracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FunctionsOracleInterface__factory>;
    getContractFactory(
      name: "IGoveranceNFTs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGoveranceNFTs__factory>;
    getContractFactory(
      name: "IGovernanceTimeLock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernanceTimeLock__factory>;
    getContractFactory(
      name: "IGovernorContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGovernorContract__factory>;
    getContractFactory(
      name: "TargetContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TargetContract__factory>;
    getContractFactory(
      name: "ERC721AVotes",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AVotes__factory>;
    getContractFactory(
      name: "GovernanceNFTs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GovernanceNFTs__factory>;

    getContractAt(
      name: "ERC677Token",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Token>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Basic",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Basic>;
    getContractAt(
      name: "ERC677",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677>;
    getContractAt(
      name: "ERC677Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677Receiver>;
    getContractAt(
      name: "LinkToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkToken>;
    getContractAt(
      name: "BasicToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasicToken>;
    getContractAt(
      name: "StandardToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StandardToken>;
    getContractAt(
      name: "AggregatorInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorInterface>;
    getContractAt(
      name: "AggregatorV2V3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV2V3Interface>;
    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "MockV3Aggregator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockV3Aggregator>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "OCR2Abstract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OCR2Abstract>;
    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "ERC677ReceiverInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC677ReceiverInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OwnableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableInterface>;
    getContractAt(
      name: "TypeAndVersionInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TypeAndVersionInterface>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IGovernorTimelock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorTimelock>;
    getContractAt(
      name: "IGovernor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernor>;
    getContractAt(
      name: "TimelockController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TimelockController>;
    getContractAt(
      name: "IVotes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVotes>;
    getContractAt(
      name: "Votes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Votes>;
    getContractAt(
      name: "IERC1822Proxiable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822Proxiable>;
    getContractAt(
      name: "IERC1967",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967>;
    getContractAt(
      name: "IBeacon",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeacon>;
    getContractAt(
      name: "ERC1967Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Proxy>;
    getContractAt(
      name: "ERC1967Upgrade",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967Upgrade>;
    getContractAt(
      name: "Proxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Proxy>;
    getContractAt(
      name: "ProxyAdmin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProxyAdmin>;
    getContractAt(
      name: "ITransparentUpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITransparentUpgradeableProxy>;
    getContractAt(
      name: "TransparentUpgradeableProxy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TransparentUpgradeableProxy>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "DoubleEndedQueue",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DoubleEndedQueue>;
    getContractAt(
      name: "AuthorizedReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuthorizedReceiver>;
    getContractAt(
      name: "AuthorizedOriginReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuthorizedOriginReceiverUpgradeable>;
    getContractAt(
      name: "ConfirmedOwnerUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerUpgradeable>;
    getContractAt(
      name: "Functions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Functions>;
    getContractAt(
      name: "FunctionsBillingRegistry",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsBillingRegistry>;
    getContractAt(
      name: "FunctionsClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClient>;
    getContractAt(
      name: "FunctionsOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsOracle>;
    getContractAt(
      name: "AuthorizedOriginReceiverInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuthorizedOriginReceiverInterface>;
    getContractAt(
      name: "AuthorizedReceiverInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AuthorizedReceiverInterface>;
    getContractAt(
      name: "FunctionsBillingRegistryInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsBillingRegistryInterface>;
    getContractAt(
      name: "FunctionsClientInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClientInterface>;
    getContractAt(
      name: "FunctionsOracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsOracleInterface>;
    getContractAt(
      name: "OCR2Base",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OCR2Base>;
    getContractAt(
      name: "OCR2BaseUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OCR2BaseUpgradeable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "Functions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Functions>;
    getContractAt(
      name: "FunctionsClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClient>;
    getContractAt(
      name: "FunctionsConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsConsumer>;
    getContractAt(
      name: "ProductRegistConsumer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProductRegistConsumer>;
    getContractAt(
      name: "SalesDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SalesDistributor>;
    getContractAt(
      name: "DaoFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DaoFactory>;
    getContractAt(
      name: "EIP712C",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EIP712C>;
    getContractAt(
      name: "GovernorCountingSimpleC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorCountingSimpleC>;
    getContractAt(
      name: "GovernorSettingsC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorSettingsC>;
    getContractAt(
      name: "GovernorTimelockControlC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorTimelockControlC>;
    getContractAt(
      name: "GovernorVotesC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotesC>;
    getContractAt(
      name: "GovernorVotesQuorumFractionC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorVotesQuorumFractionC>;
    getContractAt(
      name: "GovernorC",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorC>;
    getContractAt(
      name: "GovernanceTimeLock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernanceTimeLock>;
    getContractAt(
      name: "GovernorContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernorContract>;
    getContractAt(
      name: "FunctionsBillingRegistryInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsBillingRegistryInterface>;
    getContractAt(
      name: "FunctionsClientInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsClientInterface>;
    getContractAt(
      name: "FunctionsOracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FunctionsOracleInterface>;
    getContractAt(
      name: "IGoveranceNFTs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGoveranceNFTs>;
    getContractAt(
      name: "IGovernanceTimeLock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernanceTimeLock>;
    getContractAt(
      name: "IGovernorContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGovernorContract>;
    getContractAt(
      name: "TargetContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TargetContract>;
    getContractAt(
      name: "ERC721AVotes",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AVotes>;
    getContractAt(
      name: "GovernanceNFTs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GovernanceNFTs>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
