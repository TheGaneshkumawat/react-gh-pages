import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloading");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      console.log("animal in breed: " + animal);
      setStatus("loading");
      const res = await fetch(
        `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      localCache[animal] = json.breeds || [];
      console.log("Breeds: " + localCache[animal]);
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]); //eslint-disable-line react-hooks/exhaustive-deps

  return [breedList, status];
}
