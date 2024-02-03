import React from "react";

function ChatContainer() {
  return (
    <div className="test w-[70%] h-screen bg-yellow-500 overflow-y-auto">
      <div className="test">social</div>
      <div>
        {/* header */}
        image profile
      </div>
      <div className=""></div>
      {/* send message field */}
      <div className=" flex px-3 py-2 gap-2">
        <input
          type="text"
          placeholder="Type a Message...."
          className=" flex-1 rounded-md px-4"
        />
        <button
          type="button"
          className=" bg-blue-500 rounded-md text-center px-3 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatContainer;
