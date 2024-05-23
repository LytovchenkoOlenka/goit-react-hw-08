import css from "./HomePage.module.css";
// import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Welcome to Your Phone Book
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <p className={css.subtitle}>
        Manage your contacts easily and efficiently
      </p>
      <ul className={css.featureList}>
        <li className={css.featureItem}>Save and manage your contacts</li>
        <li className={css.featureItem}>
          Search for contacts by name or phone number
        </li>
        <li className={css.featureItem}>Edit and update contact information</li>
        <li className={css.featureItem}>
          Delete contacts when no longer needed
        </li>
      </ul>
    </div>
  );
}
