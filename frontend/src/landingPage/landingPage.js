import styles from "./landingPage.module.css";
import { useEffect, useState } from "react";
import bg from "../images/bg-holo.mp4";
import loader from "../images/loader.gif";
import axios from "axios";

function LandingPage() {
  const [arr, setArr] = useState([]);
  const [visibleChars, setVisibleChars] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:3001/feed/posts", {
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Content-Type": "application/json",
        // },
      })
      .then((response) => {
        if (response.data.posts) {
          setIsLoading(false);
          setArr(response.data.posts);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Trouble fetching data");
      });
  }, []);

  const totalChars = arr.length > 0 ? arr[0].name.length : 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleChars((prevChars) =>
        prevChars < totalChars ? prevChars + 1 : 0
      );
    }, 180);

    return () => clearInterval(timer);
  }, [totalChars]);

  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div class={styles.overlayContent}>
        <div className={styles.productCard}>
          {isLoading && <img src={loader} />}
          {arr.map((el, i) => {
            return (
              !isLoading && (
                <>
                  <div className={styles.h1Cont}>
                    <h1>{el.name.substring(0, visibleChars)}</h1>
                  </div>
                  <span>{el.description}</span>
                </>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
