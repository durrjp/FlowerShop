let nurseryFlowers = []

export const getNurseryFlowers = () => {
    return fetch('http://localhost:3000/nurseryFlowers')
        .then(response => response.json())
        .then(parsedNurseryFlowers => {
            nurseryFlowers = parsedNurseryFlowers
        })
}
export const useNurseryFlowers = () => nurseryFlowers.slice()