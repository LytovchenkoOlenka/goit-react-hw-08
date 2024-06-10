import PageTitle from "../../components/PageTitle/PageTitle";
// import css from "./RegisterPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegіstrationPage() {
  return (
    <div className="pageContainer">
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
    </div>
  );
}
