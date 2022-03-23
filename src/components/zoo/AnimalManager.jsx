import AnimalDisplay from "./AnimalDisplay"
import AnimalForm from "./AnimalForm"
import {useState} from "react"

const AnimalManager = () => {

  const [animal, setAnimal] = useState({
    name: "",
    species: "",
    hungry: false
  });

  return (
    <>
      <AnimalDisplay animal={animal} />
      <AnimalForm setAnimal={setAnimal} />
    </>
  );
};

export default AnimalManager;
