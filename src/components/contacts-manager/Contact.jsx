import Image from "./Image"

const Contact = (data) => {
  const {name, email, age, isCute, favFood, image} = data;
  let cuteTxt;
  if (isCute) {
    cuteTxt = "Cute";
  } else {
    cuteTxt = "Not Cute"
  };
  const imageAlt = "Image of " + name;

  return (
    <div>
      <h4>
        {name}
      </h4>
      <Image image={image} imageAlt={imageAlt}/>
      <p>
        {email}
        <br/>
        {age}
        <br/>
        {cuteTxt}
        <br/>
        Favourite foods:
      </p>
      <ul>
        {
          favFood.map((food, key) => {
            return (
              <li>
                {food}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Contact;
