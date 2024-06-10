import css from "./HomePage.module.css";
// import PageTitle from "../../components/PageTitle/PageTitle";

export default function HomePage() {
  return (
    <div className="pageContainer">
      <h1 className={css.title}>
        Welcome to Your Phone Book
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <p className={css.subtitle}>
        Manage your contacts easily and efficiently
      </p>
      <div className={css.about}>
        <h2 className={css.aboutTitle}>About Our Application</h2>
        <p className={css.description}>
          Our Phone Book application is designed to help you manage your
          contacts effortlessly. With our user-friendly interface, you can
          organize your contacts, add new ones, edit existing entries, and
          quickly find the information you need.
        </p>
        <p className={css.description}>
          Whether you are a busy professional who needs to keep track of clients
          and colleagues, a student managing group projects, or simply someone
          who wants to stay connected with friends and family, our Phone Book
          has the features you need to stay organized and in touch.
        </p>
        <div className={css.features}>
          <div className={css.feature}>
            <h2>Effortless Management</h2>
            <p>
              Streamline contact handling. Organize, edit, and find contacts
              with ease.
            </p>
          </div>
          <div className={css.feature}>
            <h2>Time Saving</h2>
            <p>
              Save time managing contacts. Quickly add, edit, and search for
              contacts.
            </p>
          </div>
          <div className={css.feature}>
            <h2>User-Friendly Interface</h2>
            <p>
              Enjoy an intuitive interface. Easily navigate and use the app with
              minimal learning curve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
