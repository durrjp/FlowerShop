import { FlowerList } from "./flowers/FlowerList.js";
import { getFlowers } from "./flowers/flowerProvider.js";
import { getRetailers } from "./retailers/retailerProvider.js";
import { RetailerList } from "./retailers/RetailerList.js";
import { getDistributors } from "./distributors/distributorProvider.js";
import { getNurseryFlowers } from "./nurseries/nurseryFlowerProvider.js";
import { getDistributorNurseries } from "./distributors/distributorNurseryProvider.js";
import { getNurseries } from "./nurseries/nurseryProvider.js";

getFlowers()
    .then(FlowerList)
getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryFlowers)
    .then(getDistributorNurseries)
    .then(RetailerList)
