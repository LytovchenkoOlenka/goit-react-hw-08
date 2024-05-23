import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import { useId } from "react";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import css from "./ContactForm.module.css";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Min 3 chars!")
    .max(20, "Max 20 chars!")
    .matches(/^[^0-9]*$/, "Cannot contain numbers")
    .required("Required"),
  number: Yup.string()
    .matches(/^[\d-]+$/, "Invalid phone number format")
    .max(13, "Max 13 symbols!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success("Contact was added");
      })
      .catch(() => {
        toast.error("Sorry, contact wasn`t added. Please try again");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} name="name" id={nameId}></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.container}>
          <label className={css.label} htmlFor={numberId}>
            Number
          </label>
          <Field className={css.input} name="number" id={numberId}></Field>
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
}
