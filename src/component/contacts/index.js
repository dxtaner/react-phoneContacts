import { useState, useEffect } from "react";
import "./style.css";
import List from "./List/List";
import Form from "./Form/Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullName: "Taner",
      phoneNumber: "5548",
    },
    {
      fullName: "Fatih",
      phoneNumber: "555",
    },
    {
      fullName: "Hasan",
      phoneNumber: "4566",
    },
    {
      fullName: "Hamid",
      phoneNumber: "3377",
    },
    {
      fullName: "Ela",
      phoneNumber: "1298",
    },
    {
      fullName: "Arsihan",
      phoneNumber: "8914",
    },
  ]);

  useEffect(() => {
    // console.log(contacts);
  }, [contacts]);

  return (
    <div id="Con">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
