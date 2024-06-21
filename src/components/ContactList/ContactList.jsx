import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <>
      <ul className={style.contactList}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} userId={id} name={name} number={number} />
        ))}
      </ul>
    </>
  );
}
