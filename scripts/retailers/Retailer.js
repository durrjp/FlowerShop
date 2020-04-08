export const Retailer = (retailer, distributor) => {
    return `
    <div class="singleRetailer">
        <h3>${retailer.name}</h3>
        <p>${retailer.address} ${retailer.city}, ${retailer.state}</p>
        <p class="singleDistributor">Provided by - ${distributor.name}</p>
    </div>
    `
}