import Message from "./Message";

const ChatBox = () => {
const message = [
  {
    id:1,
    text:"hello there!",
    name: "John Doe"
  },
  {
    id:2,
    text:"hello !!",
    name: "Jeff Doe"
  },
]

    return (
      <div className="pb-24 pt-20 containerWrap ">
        {message.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    );
  };
  
  export default ChatBox;
  