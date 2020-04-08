export const Flower = (flower) => {
    return `
    <div class="singleFlower ${flower.color}">
        <h3>${flower.commonName}</h3>
        <p>${flower.color}</p>
    </div>
    `
}