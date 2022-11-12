import styles from "../assets/css/HangmanDrawing.module.css";

const HEAD = <div className={styles.human_head} />;
const BODY = <div className={styles.human_body} />;
const RIGHT_ARM = <div className={styles.human_right_arm} />;
const LEFT_ARM = <div className={styles.human_left_arm} />;
const RIGHT_LEG = <div className={styles.human_right_leg} />;
const LEFT_LEG = <div className={styles.human_left_leg} />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    return (
        <div style={{position: "relative"}}>
            <div className={styles.gallows_stand_short} />
            <div className={styles.gallows_stand_flat} />
            <div className={styles.gallows_stand_long} />
            <div className={styles.gallows_base} />

            {BODY_PARTS.slice(0, numberOfGuesses)}
        </div>
    );
};

export default HangmanDrawing;
