import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { CardNavbar } from "./CardNavbar";
import DeviceEmulator from "react-device-emulator";
import "react-device-emulator/lib/styles/style.css";
import {
  EditOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row, Select } from "antd";
import "./emulator.css";

const { Option } = Select;

function Card() {
  const [isButtonClicked, setIsButtonClicked] = useState(false); // State to track if the button has been clicked
  const [selectedButton, setSelectedButton] = useState("call");
  const [selectedOption, setSelectedOption] = useState({});
  const [upiId, setUpiId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [instagramname, setInstagramname] = useState("");
  const [instagramlink, setInstagramlink] = useState("");
  const [facebookname, setFacebookname] = useState("");
  const [facebooklink, setFacebooklink] = useState("");
  const [twittername, setTwittername] = useState("");
  const [twitterlink, setTwitterlink] = useState("");
  const [linkedinname, setLinkedinname] = useState("");
  const [linkedinlink, setLinkedinlink] = useState("");
  const [youtubename, setYoutubename] = useState("");
  const [youtubelink, setYoutubelink] = useState("");
  const [whatsappmobile, setWhatsappmobile] = useState("");
  const [textareamessage, setTextareamessage] = useState("");
  const navigate = useNavigate();

  const [baiscdetailformdata, setBaiscdetailformdata] = useState({
    name: "",
    email: "",
    mobile: "",
    jobTitle: "",
    company: "",
    location: "",
    city: "",
    state: "",
    country: "",
    mapLink: "",
  });

  const [socialmediaformdata, setSocialmediaformdata] = useState({
    instagramname: "",
    instagramlink: "",
    facebookname: "",
    facebooklink: "",
    twittername: "",
    twitterlink: "",
    linkedinname: "",
    linkedinlink: "",
    youtubename: "",
    youtubelink: "",
  });

  const [whatsappformdata, setWhatsappformdata] = useState({
    whatsappmobile: "",
    textareamessage: "",
  });

  //for basic detail component

  const handlebasicFormSubmit = async (e) => {
    e.preventDefault();
    // i want to fetch data into annother omponent
    const data = {
      name,
      email,
      mobile,
      jobTitle,
      company,
      location,
      city,
      state,
      country,
      mapLink,
    };
    console.log(data);
    setBaiscdetailformdata(data);
  };

    //for social media component
    const handlesocialFormSubmit = async (e) => {
      e.preventDefault();
      const data = {
        instagramname,
        instagramlink,
        facebookname,
        facebooklink,
        twittername,
        twitterlink,
        linkedinname,
        linkedinlink,
        youtubename,
        youtubelink,
      };
      console.log(data);
      // navigate("/webcard/preview", { state: { socialuserdata: data } });
      setSocialmediaformdata(data);
    };

  //for whatsapp component
    const handlewhatsappFormSubmit = async (e) => {
      e.preventDefault();
      const whatsappdata = {
        whatsappmobile , 
        textareamessage,
      };
      console.log(whatsappdata);
      // navigate("/webcard/preview", { state: { whatsappuserdata: whatsappdata } });
      setWhatsappformdata(whatsappdata);
    };

  const handlePublishButtonClick = (e) => {
    e.preventDefault();
    setIsButtonClicked(true);
    navigate("/webcard/preview", {
      state: {
        baiscdetailformdata: baiscdetailformdata,
        socialmediaformdata: socialmediaformdata,
        // whatsappformdata: whatsappformdata,
 
      },
    });
  };

  // const handlePublishButtonClick = (e) => {
  //   e.preventDefault();
  //   setIsButtonClicked(true);

  //   const data = {
  //     name,
  //     email,
  //     mobile,
  //     jobTitle,
  //     company,
  //     location,
  //     city,
  //     state,
  //     country,
  //     mapLink,
  //   };

  //   console.log(data);

  //   // Now, proceed with navigation if needed
  //   navigate("/webcard/preview", {
  //     state: {
  //       baiscdetailformdata: data,
  //       socialmediaformdata : socialmediaformdata,
  //       whatsappformdata,
  //     },
  //   });
  // };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setSelectedOption({});
    setUpiId("");
  };

  const handleOptionChange = (value) => {
    setSelectedOption({ [selectedButton]: value });
  };

  const handleUPIChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submission logic here, you can access selectedButton, selectedOption, and upiId
    console.log("Selected Button:", selectedButton);
    console.log("Selected Option:", selectedOption[selectedButton]);
    console.log("UPI ID:", upiId);
  };

  const renderOptions = () => {
//i want to default call as a selected button


    switch (selectedButton) {
      case "call":
        return (
          <>
            <Select
              value={selectedOption[selectedButton]}
              onChange={handleOptionChange}
              className="flex justify-center mt-8 "
              placeholder="Select Call Option"
            >
              <Option value="callOption1">Call Option 1</Option>
              <Option value="callOption2">Call Option 2</Option>
            </Select>
            <br />
            <input
              className="border-2 border-gray-300 rounded-lg w-full"
              value={upiId}
              onChange={handleUPIChange}
              placeholder="Enter Contact Number"
            />
            <Button
              type="primary"
              onClick={handleSubmit}
              style={{ marginTop: 10 }}
            >
              Submit
            </Button>
          </>
        );

      case "link":
        return (
          <>
            {/* Add options and input fields for the 'link' button */}
            <div className="flex justify-center mt-8">
              <Select
                value={selectedOption[selectedButton]}
                className="flex justify-center mt-8 w-full"
                onChange={handleOptionChange}
                placeholder="Select Link Option"
              >
                <Option value="linkOption1">Visit My Store </Option>
                <Option value="linkOption2">Show my Work</Option>
                <Option value="linkOption2">Visit My Portfolio</Option>
              </Select>
            </div>
            <br />
            <input
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              value={upiId}
              onChange={handleUPIChange}
              placeholder="Enter  website link"
            />
          </>
        );

      case "mail":
        return (
          <>
            {/* Add options and input fields for the 'mail' button */}
            <div className="flex justify-center mt-8">
              <Select
                value={selectedOption[selectedButton]}
                onChange={handleOptionChange}
                placeholder="Select Mail Option"
                className="flex justify-center mt-8 w-full"
              >
                <Option value="mailOption1">mail me</Option>
                <Option value="mailOption2">send me a mail</Option>
              </Select>
            </div>
            <br />
            <input
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              value={upiId}
              onChange={handleUPIChange}
              placeholder="Enter Mail ID"
            />
          </>
        );
      case "payment":
        return (
          <>
            {/* Add options and input fields for the 'payment' button */}
            <div className="flex justify-center mt-8">
              <Select
                value={selectedOption[selectedButton]}
                onChange={handleOptionChange}
                placeholder="Select Payment Option"
                className="flex justify-center mt-8 w-full"
              >
                <Option value="paymentOption1">pay me</Option>
                <Option value="paymentOption2">make a payment</Option>
              </Select>
            </div>
            <br />
            <input
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              value={upiId}
              onChange={handleUPIChange}
              placeholder="Enter UPI ID"
            />
          </>
        );

      default:
        return null;
    }
  };


  return (
    <>
      <Row>
        <CardNavbar />
        <Col
          sm={24}
          md={24}
          lg={17}
          xl={17}
          xxl={17}
          className="overflow-y-auto"
          onScroll={(e) => console.log(e)}
        >
          <div className="bg-white rounded m-2 p-2">
            <div className="flex justify-between items-center">
              {/* First Part */}
              <div>
                <h1 className="text-2xl font-bold text-start">Basic Details</h1>
              </div>

              {/* Second Part with Button */}
              <div>
                {/* {isButtonClicked && (
            <Link
              to={{
                pathname: "/webcard/preview",
                state: {
                  baiscdetailformdata: baiscdetailformdata,
                  socialmediaformdata: socialmediaformdata,
                  whatsappformdata: whatsappformdata,
                },
              }}
            >
              Go to Preview
            </Link>
          )} */}

                <button
                  className="bg-indigo-600 text-white px-3 py-1.5 rounded-md"
                  onClick={handlePublishButtonClick}
                >
                  Publish
                </button>
              </div>
            </div>

            {/* Additional content for the first part */}
            <div className="text-sm text-start">
              <Link to="/webcard/content">
                your actucall card link <EditOutlined />
              </Link>
            </div>
          </div>

          <div
            className="scrollable-content overflow-y-auto"
            style={{
              height: "calc(100vh - 60px)", // Adjust the height as needed
            }}
          >
            <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8  w-full ">
              <div
                className="mt-2   border border-gray-300 rounded-md py-10 px-5 shadow-sm bg-white w-[65%] mx-auto"
                style={{ boxShadow: "0px 0px 10px 0px #0000001a" }}
              >
                <h1 className="text-2xl font-bold">Basic Information</h1>
                <p>This Information will be used to create your webcard</p>
                <form
                  className="space-y-6"
 
                  onSubmit={handlebasicFormSubmit}
                >
                  <div>
                    <div className="mt-2">
                      <input
                        id="Name"
                        name="Name"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Full Name"
                        required
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email Address"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div></div>

                  <div className="relative">
                    <div className="mt-2 relative rounded-md shadow-sm">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        +1 {/* Country Code */}
                      </span>
                      <input
                        id="mobile"
                        name="mobile"
                        type="number"
                        autoComplete="tel"
                        required
                        onChange={(e) => setMobile(e.target.value)}
                        className="block w-full pl-10 pr-4 py-2 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none sm:text-sm"
                        placeholder="Mobile Number"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="Job-title"
                        name="Job-title"
                        type="text"
                        autoComplete="Job-title"
                        placeholder="Enter Your Job-title"
                        required
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Company Name"
                        required
                        onChange={(e) => setCompany(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="location"
                        name="location"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Address"
                        required
                        onChange={(e) => setLocation(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your City"
                        required
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your State"
                        required
                        onChange={(e) => setState(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Country"
                        required
                        onChange={(e) => setCountry(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <input
                        id="map-link"
                        name="map-link"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Google Map Link"
                        required
                        onChange={(e) => setMapLink(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save and Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div
                className="mt-10   border border-gray-300 rounded-md py-10 px-5 shadow-sm bg-white w-[65%] mx-auto"
                style={{ boxShadow: "0px 0px 10px 0px #0000001a" }}
              >
                <h1 className="text-2xl font-bold mb-2">Main Button</h1>
                <p>This Information will be used to create your webcard</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center"></div>
                </div>
                <form className="space-y-6" action="#" method="POST">
                  <div className="container mx-auto mt-5 ">
                    <Button
                      onClick={() => handleButtonClick("call")}
                      className="bg-gray-200 ml-2 px-3 py-1.5 rounded-md text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Call
                    </Button>
                    <Button
                      onClick={() => handleButtonClick("link")}
                      className="bg-gray-200 ml-2 px-3 py-1.5 rounded-md text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Link
                    </Button>
                    <Button
                      onClick={() => handleButtonClick("mail")}
                      className="bg-gray-200 ml-2 px-3 py-1.5 rounded-md text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Mail
                    </Button>
                    <Button
                      onClick={() => handleButtonClick("payment")}
                      className="bg-gray-200 ml-2 px-3 py-1.5 rounded-md text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      Payment
                    </Button>

                    {selectedButton && (
                      <div className="mt-4">{renderOptions()}</div>
                    )}
                  </div>
                </form>
              </div>


            <div
              className="mt-10   border border-gray-300 rounded-md py-10 px-5 shadow-sm bg-white w-[65%] mx-auto"
              style={{ boxShadow: "0px 0px 10px 0px #0000001a" }}
            >
              <h1 className="text-2xl font-bold mb-1">Social Media Button</h1>
              <p>Enter Your Social Media Link</p>
              <form
                className="space-y-6"
                onSubmit={handlesocialFormSubmit}
              >
                <div className="container mx-auto mt-5 ">
                  <Row gutter={[16, 16]}>
                    <Col span={2}>
                      <FacebookFilled />
                    </Col>
                    <Col span={7}>
                      <input
                        onChange={(e) => setFacebookname(e.target.value)}
                        placeholder="Enter Your Facebook Name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </Col>
                    <Col span={15}>
                      <Input
                        onChange={(e) => setFacebooklink(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Facebook Link"
                      />
                    </Col>
                    <Col span={2}>
                      <InstagramFilled />
                    </Col>
                    <Col span={7}>
                      <input
                        onChange={(e) => setInstagramname(e.target.value)}
                        placeholder="Enter Your Instagram Name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </Col>
                    <Col span={15}>
                      <Input
                        onChange={(e) => setInstagramlink(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Instagram Link"
                      />
                    </Col>

                    <Col span={2}>
                      <TwitterOutlined />
                    </Col>
                    <Col span={7}>
                      <input
                        onChange={(e) => setTwittername(e.target.value)}
                        placeholder="Enter Twitter Name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </Col>
                    <Col span={15}>
                      <Input
                        onChange={(e) => setTwitterlink(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Twitter Link"
                      />
                    </Col>
                    <Col span={2}>
                      <LinkedinFilled />
                    </Col>
                    <Col span={7}>
                      <input
                        onChange={(e) => setLinkedinname(e.target.value)}
                        placeholder="Enter Your  Title"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </Col>
                    <Col span={15}>
                      <Input
                        onChange={(e) => setLinkedinlink(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Your Facebook Link"
                      />
                    </Col>
                  </Row>
                </div>

                <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save and Continue
                    </button>
              </form>
            </div>

            <div
              className="mt-10   border border-gray-300 rounded-md py-10 px-5 shadow-sm bg-white w-[65%] mx-auto"
              style={{ boxShadow: "0px 0px 10px 0px #0000001a" }}
            >
              <h1 className="text-2xl font-bold mb-2">Whatsapp Button</h1>
              <p>
                Enter your whatsapp number to get more leads on whatsapp number
                to get more leads on whatsapp
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p>Enable Whatsapp Button</p>
                  <switch className="ml-2">
                    <input type="checkbox" id="toggle" className="hidden" />
                    <label
                      htmlFor="toggle"
                      className="toggle-label block w-10 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </switch>
                </div>
              </div>
              <form
                className="space-y-6"
                onSubmit={handlewhatsappFormSubmit}
              >
                <div className="relative">
                  <div className="mt-2 relative rounded-md shadow-sm">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      +1 {/* Country Code */}
                    </span>
                    <input
                      id="mobile"
                      name="mobile"
                      type="number"
                      autoComplete="tel"
                      required
                      className="block w-full pl-10 pr-4 py-3 rounded-md border-gray-300 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none sm:text-sm"
                      placeholder="Mobile Number"
                      onChange={(e) => setWhatsappmobile(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <p>Message</p>
                  <div className="mt-2">
                    <textarea
                      onChange={(e) => setTextareamessage(e.target.value)}
                      className="w-full"
                      rows={5}
                      placeholder="can someone assist me ?"
                    />
                  </div>
                  <p>
                    You will receive this message when someone clicks whatsapp
                    button.
                  </p>
                </div>
                <div>
                
                <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Save and Continue
                    </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Card;
