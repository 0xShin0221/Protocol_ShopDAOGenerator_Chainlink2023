const endpoint = args[0];
if (secrets.apiKey === undefined || secrets.apiUrl === undefined) {
  throw new Error(
    "API key and API URL are required for request ShopDAO generator API endpoint"
  );
}
const salesDistributionRequest = Functions.makeHttpRequest({
  url: secrets.apiUrl + endpoint,
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: secrets.apiKey,
  },
});
const salesDistributionResponse = await salesDistributionRequest;
console.log("salesDistributionResponse", salesDistributionResponse);
if (salesDistributionRequest.error) {
  throw new Error("Error fetching sales distribution");
}

const result = {
  nftAddress: salesDistributionResponse.data.nftAddress,
  orderId: salesDistributionResponse.data.orderId,
  totalSale: salesDistributionResponse.data.totalSale,
  totalProfit: salesDistributionResponse.data.totalProfit,
};

return Functions.encodeString(JSON.stringify(result));
