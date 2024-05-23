import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";

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
            <Field type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
