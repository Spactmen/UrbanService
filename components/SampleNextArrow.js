const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    
        return (
          <div
            className={className}
            style={{display: "block", background: "green" }}
            onClick={onClick}
          />
        );
    
}

export default SamplePrevArrow