import {useState,useEffect} from 'react'
import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts,setContacts]= useState([
        {
            fullName:"Taner",
            unvan:"Bs",
            phoneNumber:"5548"

        },
        {
            fullName:"bamkimum",
            unvan:"Bs",
            phoneNumber:"555"

        },
        {
            fullName:"Hasan",
            unvan:"Gs",
            phoneNumber:"4566"

        },
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
    return (
        <div>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;
