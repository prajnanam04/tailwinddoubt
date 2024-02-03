import React from "react";
import ChatContainer from "./ChatContainer.jsx";
import Contact from "./Contact.jsx";

function chat() {
  return (
    <div className="flex container mx-auto max-h-screen ">
      <Contact />
      <ChatContainer />
    </div>
  );
}

export default chat;
