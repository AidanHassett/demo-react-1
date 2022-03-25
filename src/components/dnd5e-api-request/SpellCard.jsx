const SpellCard = ({spell}) => {

  return (
    <div>
      <h2> {spell.name} </h2>
      <h3> Description: </h3>
      <p> {spell.desc} </p>
      <h4> Higher Level: </h4>
      <p> {spell.higher_level} </p>
    </div>
  )
}

export default SpellCard;
