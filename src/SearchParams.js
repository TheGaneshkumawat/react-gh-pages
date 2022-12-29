import { useState, useEffect, useContext } from "react";
import Pet from "./Pet";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["dog", "cat", "rabbit", "bird"];

const SearchParams = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("");
  const [breedList, status] = useBreedList(animal);

  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  console.log("Breedsss: " + breedList);

  useEffect(() => {
    requestPets();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    console.log("animal: " + animal);
    console.log(" breed: " + breed);
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    console.log("pets for url: " + json.pets.length);
    setPets(json.pets);
  }

  //const location = "Seattle, WA";
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          placeholder="Location"
        />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
            value={animal}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            onBlur={(e) => setBreed(e.target.value)}
          >
            <option />
            {breedList.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="mediumorchid">Medium Orchid</option>
          </select>
        </label>
        ;<button style={{ backgroundColor: theme }}>Submit</button>;
      </form>
      <Results pets={pets} />
    </div>
  );
};
export default SearchParams;
