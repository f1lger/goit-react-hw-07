import { FaUser, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsOps";
import toast from "react-hot-toast";
// import { deleteContact } from "../../../redux/contactsSlice";

export default function Contact({ userId, name, number }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () =>
    dispatch(deleteContact(userId))
      .unwrap()
      .then(() => {
        toast.success(`
you have successfully deleted the user ${name}`);
      });
  return (
    <li className={style.contactItem}>
      <div className={style.contactInfoCont}>
        <p className={style.contactInfo}>
          <FaUser />
          {name}
        </p>
        <p className={style.contactInfo}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </li>
  );
}
