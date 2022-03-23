const AnimalDisplay = ({animal}) => {
  return (
    <header>
      {animal.name}
      <br/>
      {animal.species}
      <br/>
      {animal.hungry}
    </header>
  )
}

export default AnimalDisplay;
