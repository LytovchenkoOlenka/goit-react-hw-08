import css from "./HomePage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          Phonebook welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
