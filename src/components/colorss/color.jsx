import styles from "./colors.module.css";

function Color(props) {
    const {colorHet, rgb,hsl} = props
  return (
    <div className="">
      <div className={styles.card}>
        <div className={styles.color} ></div>
        <div className={styles.content}>
          <div className={styles.ikki}>
            <span className={styles.colorHet}>#</span>
            <strong className={styles.id}> {colorHet}</strong>
          </div>
          <div className={styles.colorAll}>
            <div className={styles.colorData}>
              <span className={styles.colorData1}>RGB</span>
              <span className={styles.colorData2}>{rgb}</span>
            </div>
            <div className={styles.colorData}>
              <span className={styles.colorData1}>HSL</span>
              <span className={styles.colorData2}>{hsl}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Color;
