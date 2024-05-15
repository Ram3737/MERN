import LandingPage from "./landingPage/landingPage";
import styles from "../src/landingPage/landingPage.module.css";

function App() {
  return (
    <div className={styles.mainWrapper}>
      <LandingPage />
      <div className={styles.subWrapper1}>
        <span>**CK THAT DEVIL ;</span>
      </div>
    </div>
  );
}

export default App;
