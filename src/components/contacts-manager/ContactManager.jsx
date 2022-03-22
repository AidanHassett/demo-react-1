import Contact from "./Contact"

const ContactManager = ({data}) => {
  return (
    <>
      <h2>
        Contacts:
      </h2>

      {
        data.map((contact, key) => {
          return (
            <Contact name={contact.name} email={contact.email} age={contact.age} isCute={contact.isCute} favFood={contact.favFood} image={contact.image} />
          )
        })
      }
    </>
  );
};

export default ContactManager;
