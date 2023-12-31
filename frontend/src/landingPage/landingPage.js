import styles from "./landingPage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function LandingPage() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://first-mern-y32l.onrender.com/feed/posts", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.posts) {
          setArr(response.data.posts);
        }
      })
      .catch((err) => {
        alert("Trouble fetching data");
      });
  }, []);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.subWrapper}>
        {arr.map((el, i) => {
          return (
            <div className={styles.productCard} key={i}>
              <span>{el.name}</span>
              <span>{el.price}</span>
              <span>{el.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
