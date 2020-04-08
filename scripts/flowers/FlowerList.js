import { useFlowers } from "./flowerProvider.js"
import { Flower } from "./Flower.js"

const contentTarget = document.querySelector(".flowersContainer")

export const FlowerList = () => {
    render()
}

const render = () => {
    const flowers = useFlowers()
    const flowersString = flowers.map(flower => {
        return `
        ${Flower(flower)}
        `
    }).join("")
    contentTarget.innerHTML = flowersString
}