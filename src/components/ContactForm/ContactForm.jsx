import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import style from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsOps";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(23, "Too long"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(23, "Too long"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = (value, actions) => {
    dispatch(addContact(value))
      .unwrap()
      .then(() => {
        toast.success(`you have successfully added a user ${value.name}`);
      });
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={style.form}>
          <label className={style.formItem}>
            <p>Name</p>
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={style.formItem}>
            <p>Number</p>
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
