const endpoint = args[0];
const baseApiUrl = args[1];
const productProfitRightNFTAddress = args[2];
const product = args[3];
const productVariantsJsonString = args[4];
const productOptionsJsonString = args[5];
const productImagesJsonString = args[6];
// const productInitialInventories = args[7];
const cost = args[7];
const storeUrl = args[8];
const price = args[9];

// if (secrets.apiKey === undefined) {
//   throw new Error(
//     "API key and API URL are required for request ShopDAO generator API endpoint"
//   );
// }
const salesDistributionRequest = await Functions.makeHttpRequest({
  url: baseApiUrl + endpoint,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Authorization: secrets.apiKey,
  },
  data: {
    productProfitRightNFTAddress,
    product,
    productVariantsJsonString,
    productOptionsJsonString,
    productImagesJsonString,
    // productInitialInventories,
    cost,
    storeUrl,
    price,
  },
});
const salesDistributionResponse = await salesDistributionRequest;

if (salesDistributionResponse.error) {
  throw new Error("Error fetching sales distribution");
}

const result = {
  message: salesDistributionResponse.data.message,
};

return Functions.encodeString(JSON.stringify(result));
