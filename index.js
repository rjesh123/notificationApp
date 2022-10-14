const Notification = (props) => {
  //  Write your code here.
  {className,notificationText,image} = props;
  return(
        <div className={className}>
            <img className="icon" src={image}/>
            <p className="text">{notificationText}</p>
        </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notification-card-container">
    <div className="content-container">
      <h1 className="heading">Notifications</h1>
      <Notification
        className="information-container"
        notificationText="Information Message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="success-container"
        notificationText="Success Message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="warning-container"
        notificationText="Warning Message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="danger-container"
        notificationText="Danger Message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
