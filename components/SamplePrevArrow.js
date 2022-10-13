import styles from "../styles/SampleNextArrow.module.css"

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div>

      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      
      />
    </div>

  );

}

export default SampleNextArrow