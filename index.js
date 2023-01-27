const Box = (props) => {
  const { text, Color } = props;
  return (
    <div className={`boxContainer ${Color}`}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1>Boxes</h1>
    <div className="boxesContainer">
      <Box text="Small" Color="sColor" />
      <Box text="Medium" Color="mColor" />
      <Box text="Large" Color="lColor" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
