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

if (salesDistributionRequest.error) {
  throw new Error("Error fetching sales distribution");
}

const result = {
  nftAddresses: salesDistributionResponse.data.nftAddresses,
  hyphenatedOrderIds: salesDistributionResponse.data.hyphenatedOrderIds,
  totalSales: salesDistributionResponse.data.totalSales,
  totalProfits: salesDistributionResponse.data.totalProfits,
};

return Functions.encodeString(JSON.stringify(result));
