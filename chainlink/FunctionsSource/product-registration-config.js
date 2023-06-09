const fs = require("fs");

// Loads environment variables from .env file (if it exists)
require("dotenv").config();

const Location = {
  Inline: 0,
  Remote: 1,
};

const CodeLanguage = {
  JavaScript: 0,
};

const ReturnType = {
  uint: "uint256",
  uint256: "uint256",
  int: "int256",
  int256: "int256",
  string: "string",
  bytes: "Buffer",
  Buffer: "Buffer",
};

// Configure the request by setting the fields below
const requestConfig = {
  walletPrivateKey: process.env["PRIVATE_KEY"],
  // location of source code (only Inline is curently supported)
  codeLocation: Location.Inline,
  // location of secrets (Inline or Remote)
  // secretsLocation: Location.Inline,
  // code language (only JavaScript is currently supported)
  codeLanguage: CodeLanguage.JavaScript,
  // string containing the source code to be executed
  source: fs
    .readFileSync("chainlink/FunctionsSource/product-registoration-source.js")
    .toString(),
  // secrets can be accessed within the source code with `secrets.varName` (ie: secrets.apiKey)
  // secrets: {
  //   apiKey: process.env.SHOPDAO_G_API_KEY ?? "",
  //   apiUrl: process.env.SHOPDAO_G_API_URL ?? "",
  // },
  // args can be accessed within the source code with `args[index]` (ie: args[0])
  args: [
    "chainlink/productRegistoration",
    "https://dev-shop-dao-generator-chainlink2023.vercel.app/api/",
    "0x",
    "{'title': 'Burton Custom Freestyle 151','body_html': '<strong>Good snowboard!</strong>','vendor': 'Burton','product_type': 'Snowboard'}",
    "[{'option1':'Blue','option2':'155'},{'option1':'Black','option2':'159'}]",
    "[{'name':'Color','values':['Blue','Black']},{'name':'Size','values':['155','159']}]",
    "[{'src':'http://example.com/rails_logo.gif'}]",
    // "[{'sku':'skusample','cost':'100'}]",
    "1800",
    "shopdao-generator-dev-with-test-data",
    "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",
    "2000",
  ],
  // expected type of the returned value
  expectedReturnType: ReturnType.string,
};

module.exports = requestConfig;
