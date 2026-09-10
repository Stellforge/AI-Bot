import ChatBotStart from "./Components/ChatBotStart";
import ChatBotApp from "./Components/ChatBotApp";
import { useState } from "react";

const App = () => {
  const [isChatting, setIsChatting] = useState(false);

  const handleStartChat = () => {
    setIsChatting(true);
  };

  const handleGoBack = () => {
    setIsChatting(false);
  };

  return (
    <div className="container">
      {isChatting ? <ChatBotApp onGoBack={handleGoBack} />  : <ChatBotStart onStartChat={handleStartChat} /> }
    </div>
  );
};

export default App;
