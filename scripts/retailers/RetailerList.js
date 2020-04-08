
import { useRetailers } from "./retailerProvider.js"
import { Retailer } from "./Retailer.js"
import { useDistributors } from "../distributors/distributorProvider.js"

const contentTarget = document.querySelector(".retailersContainer")

export const RetailerList = () => {
    render()
}

const render = () => {
    const retailers = useRetailers()
    const retailersString = retailers.map(retailer => {
        const distributors = useDistributors()
        const matchingDistributors = distributors.find(distributor => distributor.id === retailer.distributorId)
        return `
        ${Retailer(retailer, matchingDistributors)}
        `
    }).join("")
    contentTarget.innerHTML = retailersString
}