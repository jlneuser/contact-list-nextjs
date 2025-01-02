'use client'
import React, { useState } from 'react'; 
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const handleAddContact = (e) => {
    e.preventDefault();
    setContacts([...contacts, { name, phone, email, image }]);
    setName("");
    setPhone("");
    setEmail("");
    setImage("");
  };

  const handleReset = () => {
    setContacts([]);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact) => (
          <li>
            <img
              src={contact.image || "https://avatar.iran.liara.run/public"}
              alt={contact.name}
              style={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </li>
        ))}
      </ul>
      <h2>Add Contact</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button onClick={handleAddContact}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
