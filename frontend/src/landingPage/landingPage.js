import styles from "./landingPage.module.css";

function LandingPage() {
  let arr = [1, 2, 3, 4, 5];

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.subWrapper}>
        {arr.map((el) => {
          return (
            <div className={styles.productCard}>
              <span>Product Name</span>
              <span>price</span>
              <span>desc</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
