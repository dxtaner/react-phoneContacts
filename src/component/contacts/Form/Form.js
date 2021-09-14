import { useState, useEffect } from "react";
import "../style.css";

const initialFormValues = { fullName: "", phoneNumber: "" };

function Form(addContact, contacts) {
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();
  
    if(form.fullName==="" ||  form.phoneNumber===""){
      return false;
    }
 
    addContact([...addContact,form]);  
  
    // console.log(form);

  };

  return (
    <form  onSubmit={onSubmit} >
      <div>
        <input
          name="fullName"
          placeholder="İsim Soyisim Giriniz"
          onChange={onChangeInput}
          value={form.fullName}
        ></input>
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Numara Giriniz"
          onChange={onChangeInput}
          value={form.phoneNumber}
        ></input>
      </div>
      <div>
        <button className="btn">Ekleyin</button>
      </div>
    </form>
  );
}

export default Form;
