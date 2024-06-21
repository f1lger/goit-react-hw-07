import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import Loader from "../Loader";
import Error from "../Error";
import { selectError, selectLoading } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch(() => {
        toast.error("ops we have a problem");
      });
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader>Loading</Loader>}
      {error && (
        <Error>ohh something was wrong!! please refresh the page</Error>
      )}
      <ContactList />
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
