const Popup = props => {
  return (
    <div className="popup-box" >
      <span className="close-icon" onClick={props.handleClose}>x</span>
      <div className="box">
        {props.gallery}
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;