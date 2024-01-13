import styles from "./buttons.module.css";




function Button(props) {
  return (
    <div className={styles.card}>
      <div className={styles.card1}>
        <div className={styles.btn} style={{background: "#13183F" }}>
          Get Start
        </div>
        <span className={styles.text}>Button 1 Idle</span>
      </div>
      <div className={styles.card1}>
        <div className={styles.btn} style={{background: "#666CA3" }}>
          Get Start
        </div>
        <span className={styles.text}>Button 1 Hover</span>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div>
      <div className={styles.logo}>Color</div>
      <div className={styles.cards}>
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
}

export default Buttons;
