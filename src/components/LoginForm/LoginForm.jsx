import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import { Button } from "@mui/material";

export default function LoginForm() {
  const dispatch = useDispatch();

  //отримуємо проміс нашого запиту і обробляємо(then.catch), щоб вивести тост
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
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
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.label}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
          <button className={css.btn} type="submit">
            Log In
          </button>
          {/* <Button className={css.btn} variant="contained" type="submit">
            Log In
          </Button> */}
        </Form>
      </Formik>
    </div>
  );
}
