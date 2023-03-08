import styles from "./App.module.scss";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          aperiam!
        </p>
      </header>
      <MainContent />
    </div>
  );
}

export default App;
