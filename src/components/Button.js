const Button = ({ color, text }) => {
    const onClick = () => {
      console.log("click");
    };
    return (
      <div>
        <button
          onclick={onClick}
          style={{ backgroundColor: color }}
          className="btn"
        >
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;
  