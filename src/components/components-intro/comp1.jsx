import chyna from "./cat.jpg"
const FirstComp = () => {
  const name = "Aidan";
  const favs = {
    "colour" : "purple",
    "pizza" : "meat",
    "number" : 37,
    "animal" : chyna
  };

  return (
    <>
      <p> My name is {name}! </p>
      <p> My favourite pizza is {favs.pizza} </p>
      <p> My favoirite colour is {favs.colour} </p>
      <p> My favoirite number is {favs.number} </p>
      <p> My favoirite animal is this one: </p>
      <img src={chyna} alt="A cat named Chyna" height="584" width="1040"/>
    </>
  );
}
export default FirstComp;
