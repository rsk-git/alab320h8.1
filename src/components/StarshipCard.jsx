


export default function StarshipCard ({starship}){
const {name, url} = starship;
return (
    <a href = {url}>
    <h1>{name}</h1>
    </a>
)
};