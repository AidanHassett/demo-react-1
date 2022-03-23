const AnimalForm = ({animal, setAnimal}) => {

  let tempAnimal = {
    name: "",
    species: "",
    hungry: false
  };

  const setValue = (event) => {
    if (event.target.value == "on") {
      tempAnimal.hungry = true;
    } else {
      tempAnimal.hungry = false;
    }
  }

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={(event) => tempAnimal.name = event.target.value} />
      <br/>
      <label htmlFor="species">Species:</label>
      <input type="text" id="species" name="species" onChange={(event) => tempAnimal.species = event.target.value} />
      <br/>
      <label htmlFor="hungry">Hungry:</label>
      <input type="checkbox" id="hungry" name="hungry" onChange={setValue} />
      <br/>
      <button type="button" onClick={() => setAnimal(tempAnimal)}>Submit</button>
    </form>
  )
}

export default AnimalForm;
