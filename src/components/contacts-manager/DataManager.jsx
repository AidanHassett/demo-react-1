import ContactManager from "./ContactManager"
import aidanImg from "./psmg.png"

const DataManager = () => {
  const contactArray = [
    {
      "name": "Aidan",
      "email": "an@email.com",
      "age": 22,
      "isCute": true,
      "favFood": [
        "chocolate", "brownies", "biscuits"
      ],
      "image": aidanImg
    },
    {
      "name": "Aidan",
      "email": "an@email.com",
      "age": 22,
      "isCute": true,
      "favFood": [
        "chocolate", "brownies", "biscuits"
      ],
      "image": aidanImg
    }
  ]
  return (
    <ContactManager data={contactArray}/>
  )
}

export default DataManager;
