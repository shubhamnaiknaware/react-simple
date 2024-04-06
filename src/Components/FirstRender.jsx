import ReactDOM from "react-dom";

const FirstRender = () => {
  const data = (
    <div>
      <h1>The Element is Rendered</h1>
    </div>
  );
  const handleDisplay = () => {
    ReactDOM.render(data, document.getElementById("node"));
  };
  return (
    <div id="node">
      <button onClick={handleDisplay}> Click Here</button>
    </div>
  );
};
export default FirstRender;
