
import {useEffect, useState} from 'react';
// import axios from "axios";
// import {useParams} from "react-router-dom"
// import swApi from '/src/services/sw-api.js'
import getAllStarShips from './services/sw-api';
import StarshipCard from './components/StarshipCard'


export default function App () {
  // Our api key from some third-party API.
  // const apiKey = "";
  // const url = `https://swapi.dev/api/starships/`;

  // State to hold the data.
  const [starships, setStarships] = useState([]);

  // Function to fetch data.
  // const getData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setData(data);
  //   } catch(e) {
  //     console.error(e)
  //   }
  // };

  // useEffect to run getData when component mounts.
  useEffect(() => {
    // getData();
    const fetchData = async ()=> {
      try {
        const data = await getAllStarShips();
        setStarships(data);

      } catch (error) {
        console.error(error);
      }
    }
    console.log(starships);
    fetchData();
  }, []);

  // loaded function for when data is fetched.
  // const loaded = () => {
  //   return (
  //     <div>
  //       {/* <h1>{data.somefield}</h1>
  //       <h2>{data.someOtherField}</h2> */}
  //     </div>
  //   );
  // };

  // Function for when data doesn't exist.
  // const loading = () => {
  //   return <h1>Loading...</h1>;
  // };

  // If data exists, run the loaded function; otherwise, run loading.
  // return data ? loaded() : loading();
  return (
    <div>
      <h1>Star wars Starships</h1>
      <div>
        {starships.map((starship) =>(
          <StarshipCard starship={starship}/>
        ))};
      </div>
    </div>
  )
}