import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  console.log(props)
  const { name, image, handle, } = props.tweets.user
  const { timestamp, message } = props.tweets
  return (
    <div className="tweet">


      <ProfileImage image={image} />

      <div className="body">
        <div className="top">
          <User userObject={props.tweets.user} />

          <Timestamp timestamp={timestamp} />
        </div>

        <Message message={message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
