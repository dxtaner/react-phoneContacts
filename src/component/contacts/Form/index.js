import { useState, useEffect } from "react";

const initialFormValues = { fullName: "", unvan: "", phoneNumber: "" };

function Form(addContact, contacts) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullName === "" || form.unvan === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
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
          name="unvan"
          placeholder="Ünvan Giriniz"
          onChange={onChangeInput}
          value={form.unvan}
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
        <button className="btn">ADD</button>
      </div>
    </form>
  );
}

export default Form;
