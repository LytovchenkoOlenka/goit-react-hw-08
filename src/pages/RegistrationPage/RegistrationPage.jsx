import PageTitle from "../../components/PageTitle/PageTitle";
// import css from "./RegisterPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function RegіstrationPage() {
  return (
    <div className="pageContainer">
      <PageTitle>Register your account</PageTitle>
      <RegisterForm />
    </div>
  );
}
