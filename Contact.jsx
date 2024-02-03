import React from "react";
//import img from "../../assets/yoja.jpg";
function Contact() {
  const img =
    "https://images.pexels.com/photos/11338382/pexels-photo-11338382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  return (
    <div className=" max-h-full test w-[30%] bg-yellow-200 text-white">
      <div className="test">socials</div>
      <div className="flex justify-center py-8">
        <input
          type="search"
          placeholder="search your chat"
          className="rounded-md w-full mx-5 px-5 py-2 "
        />
      </div>
      <div className=" h-[90vh] overflow-hidden overflow-y-auto ">
        <div className="flex bg-white max-h-[200px] items-center my-1 mx-1 rounded-md">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[200px] items-center my-1 mx-1 rounded-md">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white min-h-[200px] items-center my-1 mx-1 rounded-md ">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md ">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md ">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
        <div className="flex bg-white max-h-[100px] items-center my-1 mx-1 rounded-md ">
          <img
            src={img}
            className=" object-cover h-[50px] w-[50px] rounded-3xl"
          />
          <div className=" pl-3">
            <p className="  text-teal-900">AMan</p>
            <p className=" text-teal-900">Open mofu</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
