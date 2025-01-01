export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      aria-pressed={props.isHeld}
      aria-label={`Die with a value of ${props.value}, ${
        props.isHeld ? "held" : "not held"
      }`}
      style={styles}
      onClick={props.hold}
    >
      {props.value}
    </button>
  );
}
