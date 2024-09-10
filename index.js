const Button = (props) => {
  const { buttonText, className } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="card-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="buttons-container">
        <Button buttonText="Like" className="like-button" />
        <Button buttonText="Comment" className="comment-button" />
        <Button buttonText="share" className="share-button" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
