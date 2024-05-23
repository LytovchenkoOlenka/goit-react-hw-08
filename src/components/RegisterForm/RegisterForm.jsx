import { useDispatch } from "react-redux";
import css from "./RegisterForm.module.css";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Success!!!");
      })
      .catch(() => {
        toast.error("Error!!!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
        </label>
        <Button className={css.btn} variant="contained" type="submit">
          Register
        </Button>
      </Form>
    </Formik>
  );
}
