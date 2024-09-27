

export default async function getAllStarShips() {

const API_URL = "https://swapi.dev/api/starships/";
try {
    const response = await fetch (API_URL)
    const data = await response.json()
    return data.results;
} catch (error) {
    console.log('error');
}
};
console.log(getAllStarShips());