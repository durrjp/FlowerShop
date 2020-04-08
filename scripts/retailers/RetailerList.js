
import { useRetailers } from "./retailerProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/distributorProvider.js"
import { useNurseries } from "../nurseries/nurseryProvider.js"
import { useDistributorNurseries } from "../distributors/distributorNurseryProvider.js"
import { useNurseryFlowers } from "../nurseries/nurseryFlowerProvider.js"
import { useFlowers } from "../flowers/flowerProvider.js"

const contentTarget = document.querySelector(".retailersContainer")

export const RetailerList = () => {
    render()
}

const render = () => {
    const flowers = useFlowers()
    const retailers = useRetailers()
    const distributors = useDistributors()
    const nurseries = useNurseries()
    const distributorNurseries = useDistributorNurseries()
    const nurseryFlowers = useNurseryFlowers()

    const retailersString = retailers.map(retailer => {
        const matchingDistributor = distributors.find(distributor => distributor.id === retailer.distributorId)

        let matchingNurseries = distributorNurseries.filter(dN => matchingDistributor.id === dN.distributorId)
        matchingNurseries = matchingNurseries.map(mN => {
            return nurseries.find(nursery => nursery.id === mN.nurseryId)
        })
        let matchingFlowers = ""
        matchingNurseries.map(mN => {
            matchingFlowers = nurseryFlowers.filter(nF => nF.nurseryId === mN.id)
            matchingFlowers = matchingFlowers.map(mF => {
                return flowers.find(flower => flower.id === mF.flowerId)
            })
        })

        return `
        ${Retailer(retailer, matchingDistributor, matchingNurseries, matchingFlowers)}
        `
    }).join("")
    contentTarget.innerHTML = retailersString
}