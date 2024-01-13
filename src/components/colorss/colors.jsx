import Color from "./color";
import styles from "./colors.module.css";

const colorsData = [
  {
    rang: "#666CA3",
    colorHet: "666CA3",
    rgb: "102, 108, 163",
    hsl: "234°, 25%, 52%",
  },
  {
    rang: "#13183F",
    colorHet: "13183F",
    rgb: "19, 24, 63",
    hsl: "233°, 54%, 16%",
  },
  {
    rang: "#83869A",
    colorHet: "83869A",
    rgb: "131, 134, 154",
    hsl: "232°, 10%, 56%",
  },
  {
    rang: "#F74780",
    colorHet: "F74780",
    rgb: "247, 71, 128",
    hsl: "341°, 92%, 62%",
  },
  {
    rang: "#FFA7C3",
    colorHet: "FFA7C3",
    rgb: "255, 167, 195",
    hsl: "341°, 100%, 83%",
  },
  {
    rang: "#FFFFFF",
    colorHet: "FFFFFF",
    rgb: "255, 255, 255",
    hsl: "0°, 0%, 100%",
  },
  {
    rang: "linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)",
    colorHet: "F02AA6 - FF6F48",
    rgb: "240, 42, 166",
    hsl: "13°, 100%, 64%",
  },
  {
    rang: "linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)",
    colorHet: "4851FF - F02AA6",
    rgb: "240, 42, 166",
    hsl: "322°, 87%, 55%",
  },
];

function Colors() {
  return (
    <div>
      <div className={styles.logo}>Color</div>
      <div className={styles.cards}>
        {colorsData.map((colorData, i) => (
          <Color
            key={i}
            rang={colorData.rang}
            colorHet={colorData.colorHet}
            rgb={colorData.rgb}
            hsl={colorData.hsl}
          />
        ))}
      </div>
    </div>
  );
}
export default Colors;
