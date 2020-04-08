export const Retailer = (retailer, distributor, nurseries, flowers) => {
    return `
    <div class="singleRetailer">
        <div class="retailerInfo">
            <h3>${retailer.name}</h3>
            <p>${retailer.address} ${retailer.city}, ${retailer.state}</p>
            <p class="singleDistributor">Provided by - ${distributor.name}</p>
            <p class="singleDistributor">Nurseries - ${nurseries[0].name}, ${nurseries[1].name}
            </p>
        </div>
        <div class= "nurseryFlowers">
        ${
            flowers.map(flower => {
                return `
                <div class="singleFlower ${flower.color}">
                    <h3>${flower.commonName}</h3>
                    <p>${flower.color}</p>
                </div>
                `
            }).join("")
        }
        </div>
    </div>
    `
}

// ${nurseries.map(nursery => {
//     return `${nursery.name}`
// })}

// ${
//     flowers.map(flower => {
//     return `
//     <div class="singleFlower ${flower.color}">
//         <h3>${flower.commonName}</h3>
//         <p>${flower.color}</p>
//     <div>
//     `
//     }).join("")
// }