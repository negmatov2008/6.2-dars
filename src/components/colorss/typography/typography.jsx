import styles from "./typography.module.css";

const right = [
  {
    head1: "Heading XL",
    head2: "Plus Jakarta Sans Extra Bold",
    head3: "56px",
    head4: "70px Line",
    text: "Increase your skillwith minimal budget",
  },
  {
    head1: "Heading L",
    head2: "Plus Jakarta Sans Extra Bold",
    head3: "40px",
    head4: "51px Line",
    text: "Users all around the globe",
  },
  {
    head1: "Heading m",
    head2: "Plus Jakarta Sans Extra Bold",
    head3: "32px",
    head4: "40px Line",
    text: "Check out our most popular courses",
  },
  {
    head1: "Heading s",
    head2: "Plus Jakarta Sans Extra Bold",
    head3: "24px",
    head4: "28px Line",
    text: "Photography",
  },
];

function Right(props) {
  return (
    <div className={styles.right}>
      <div className={styles.rightContent}>
        <span className={styles.same}>{props.head1}</span>
        <span className={styles.same}>{props.head2}</span>
        <span className={styles.same1}>{props.head3}</span>
        <span className={styles.same}>{props.head4}</span>
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
let left = [
  {
    head1: "Body M",
    head2: "Plus Jakarta Sans Medium",
    head3: "18px",
    head4: "28px Line",
    text: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
  },
  {
    head1: "Body s",
    head2: "Plus Jakarta Sans Bold",
    head3: "16px",
    head4: "28px Line",
    text: "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Donec nec justo eget felis facilisis fermentum.",
  },
];
function Left(props) {
  return (
    <div className={styles.left}>
      <div className={styles.leftContent}>
        <span className={styles.same}>{props.head1}</span>
        <span className={styles.same}>{props.head2}</span>
        <span className={styles.same1}>{props.head3}</span>
        <span className={styles.same}>{props.head4}</span>
      </div>
      <div className={styles.leftText}>{props.text}</div>
    </div>
  );
}

function Typography() {
  return (
    <div className={styles.typography}>
      <div className={styles.logo}>Typography</div>
      <div className={styles.content}>
        <div className={styles.right}>
          {right.map((right, i) => (
            <Right
              key={i}
              head1={right.head1}
              head2={right.head2}
              head3={right.head3}
              head4={right.head4}
              text={right.text}
            />
          ))}
        </div>
        <div>
          {left.map((left, i) => (
            <Left key={i} {...left} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Typography;
