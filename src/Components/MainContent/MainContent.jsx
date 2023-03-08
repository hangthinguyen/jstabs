import image from "../../images/hero-bcg.jpeg";
import styles from "./MainContent.module.scss";
import Tabs from "../Tabs/Tabs";
import "./MainContent.module.scss";

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <div className={styles.imgContainer}>
        <img src={image} alt="img" />
      </div>
      <Tabs />
    </div>
  );
};

export default MainContent;
