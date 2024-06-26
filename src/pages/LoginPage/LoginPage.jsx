import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function LoginPage() {
  return (
    <div className="pageContainer">
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}
