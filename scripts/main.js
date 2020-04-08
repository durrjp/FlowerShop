import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/flowerProvider.js";
import { getRetailers } from "./retailers/retailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/distributorProvider.js";

getFlowers().then(FlowerList)
getRetailers().then(getDistributors).then(RetailerList)
