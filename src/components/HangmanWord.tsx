import styles from "../assets/css/HangmanWord.module.css";

type HangmanWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
};

const HangmanWord = ({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: HangmanWordProps) => {
    return (
        <div className={styles.keyboard_word_wrapper}>
            {wordToGuess.split("").map((letter, index) => (
                <span style={{borderBottom: ".1em solid black"}} key={index}>
                    <span
                        style={{
                            visibility:
                                guessedLetters.includes(letter) || reveal
                                    ? "visible"
                                    : "hidden",
                            color:
                                !guessedLetters.includes(letter) && reveal
                                    ? "red"
                                    : "black",
                        }}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default HangmanWord;
