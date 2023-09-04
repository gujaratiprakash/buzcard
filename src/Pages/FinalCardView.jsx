import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Col, Radio, Row , Tabs } from 'antd';
import Contact from './Contact';
import About from './About';
import template1Image from '../Assets/card1.png';
import template2Image from '../Assets/card2.png';
import { FacebookFilled, FacebookOutlined, GoogleCircleFilled, InstagramFilled, InstagramOutlined, LinkedinFilled, MailOutlined, TwitterOutlined, TwitterSquareFilled, WhatsAppOutlined, YoutubeFilled } from '@ant-design/icons';

export function FinalCardView() {

  const location = useLocation();
  const baiscdetailformdata = location.state?.baiscdetailformdata || {};
  const socialmediaformdata = location.state?.socialmediaformdata || {};
  const whatsappformdata = location.state?.whatsappformdata || {};
  // const whatsappuserdata = location.state?.whatsappuserdata || {};
  // const selectedTemplate = location.state?.selectedTemplate || 'template1'; // Receive the selected template as a prop
  // const [templateContent, setTemplateContent] = useState(null);

  // Load the template content based on the selected template
  // useEffect(() => {
  //   if (selectedTemplate === 'template1') {
  //     loadTemplate1();
  //   } else if (selectedTemplate === 'template2') {
  //     loadTemplate2();
  //   }
  //   // Add more conditions for additional templates
  // }, [selectedTemplate]);


  //tab items
  // const items = [
  //   {
  //     key: '1',
  //     label: 'Home',
  //       children: <About />,
  //   },
  //   {
  //     key: '2',
  //     label: 'Contact',
  //     children: <Contact />,
  //   },
  //   {
  //     key: '3',
  //     label: 'Others',
  //     children: 'Content of other Tabs',
  //   },
  // ];


  // const loadTemplate1 = () => {
  //   setTemplateContent(
  //     <div className="min-h-screen flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 border-1 border-gray-200">
  //       <div className="container my-20 bg-gray-500">
  //         <div>
  //           <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
  //             <div className="flex justify-center">
  //               <img
  //                 src="https://avatars0.githubusercontent.com/u/35900628?v=4"
  //                 alt=""
  //                 className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
  //               />
  //             </div>
  //             <div className="mt-16">
  //               <h1 className="font-bold text-center text-3xl text-gray-900">
  //                 {userData.name}
  //               </h1>
  //               <p className="text-center text-sm text-gray-400 font-medium">
  //                 {userData.jobTitle} - {userData.company}
  //               </p>

  //               <p className="text-center text-sm text-gray-400 font-medium">
  //                 {userData.location}
  //               </p>
  //               <p>
  //                 <span></span>
  //               </p>
  //               <div className="flex justify-center m-2">
  //                 <Row gutter={16}>
  //                   <Col span={18}>
  //                     <Button
  //                       style={{ width: '200px' }}
  //                       className="bg-blue-500 "
  //                       size="large"
  //                     >
  //                       Contact
  //                     </Button>
  //                   </Col>
  //                   <Col span={6}>
  //                     <Button
  //                       shape="round"
  //                       icon={<WhatsAppOutlined />}
  //                       size="large"
  //                       block
  //                     ></Button>
  //                   </Col>
  //                 </Row>
  //               </div>
  //               <div>
  //                 <Tabs
  //                   defaultActiveKey="1"
  //                   centered
  //                   size="large"
  //                   items={items}
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

//   const loadTemplate2 = () => {
//     setTemplateContent(
//       <main className="profile-page my-60">
//   <section className="relative block h-500-px">
//     <div
//       className="absolute top-0 w-full h-full bg-center bg-cover"
//       style={{
//         backgroundImage:
//           'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
//       }}
//     >
//       <span
//         id="blackOverlay"
//         className="w-full h-full absolute opacity-50 bg-black"
//       />
//     </div>
//     <div
//       className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
//       style={{ transform: "translateZ(0px)" }}
//     >
//       <svg
//         className="absolute bottom-0 overflow-hidden"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="none"
//         version="1.1"
//         viewBox="0 0 2560 100"
//         x={0}
//         y={0}
//       >
//         <polygon
//           className="text-blueGray-200 fill-current"
//           points="2560 0 2560 100 0 100"
//         />
//       </svg>
//     </div>
//   </section>
//   <section className="relative py-16 bg-blueGray-200">
//     <div className="container mx-auto px-4">
//       <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
//         <div className="px-6">
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
//               <div className="relative">
//                 <img
//                   alt="..."
//                   src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
//                   className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
//                 />
//               </div>
//             </div>
//             <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
//               <div className="py-6 px-3 mt-32 sm:mt-0">
//                 <button
//                   className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
//                   type="button"
//                 >
//                   Connect
//                 </button>
//               </div>
//             </div>
//             <div className="w-full lg:w-4/12 px-4 lg:order-1">
//               <div className="flex justify-center py-4 lg:pt-4 pt-8">
//                 <div className="mr-4 p-3 text-center">
//                 <Link to="">
//                   <FacebookFilled />
//                   <p>Facebook</p>
//                 </Link>
//                 </div>
//                 <div className="mr-4 p-3 text-center">
//                 <Link to="">
//                   <TwitterSquareFilled />
//                   <p>Twitter</p>
//                 </Link>
//                 </div>
//                 <div className="lg:mr-4 p-3 text-center">
//                 <Link to="">
//                   <InstagramFilled />
//                   <p>Instagram</p>
//                 </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-center mt-12">
//             <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
//               {userData.name}
//             </h3>
//             <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
//               <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
//               {userData.location}
//             </div>
//             <div className="mb-2 text-blueGray-600 mt-10">
//               <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
//               {userData.jobTitle} - {userData.company}
//             </div>
//             <div className="mb-2 text-blueGray-600">
//               <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
//               University of Computer Science
//             </div>
//           </div>
//           <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
//             <div className="flex flex-wrap justify-center">
//               <div className="w-full lg:w-9/12 px-4">
//                 <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
//                   {userData.Aboutme} 

//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
// </main>

//     );
//   };

  return (
    <div>
<main className="profile-page my-60">
  <section className="relative block h-500-px">
    <div
      className="absolute top-0 w-full h-full bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
      }}
    >
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-50 bg-black"
      />
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
      style={{ transform: "translateZ(0px)" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x={0}
        y={0}
      >
        <polygon
          className="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        />
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button
                  className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Connect
                </button>
                <Link to={`https://api.whatsapp.com/send?phone=${whatsappformdata?.whatsappmobile}`}>
                  <WhatsAppOutlined />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                {
                  socialmediaformdata.facebookname && socialmediaformdata.facebooklink ? 
                  <Link to={socialmediaformdata.facebooklink}>
                  <FacebookFilled />
                  <p>{socialmediaformdata.facebookname}</p>
                </Link> : null
                }
                </div>
                <div className="mr-4 p-3 text-center">
              {
                  socialmediaformdata.twittername && socialmediaformdata.twitterlink ?
                  <Link to={socialmediaformdata.twitterlink}>
                  <TwitterSquareFilled />
                  <p>{socialmediaformdata.twittername}</p>
                </Link> : null
              }
                </div>
                <div className="lg:mr-4 p-3 text-center">
              {/* itss only show  if he have name and  link */}
                {
                  socialmediaformdata.instagramname && socialmediaformdata.instagramlink ?
                  <Link to={socialmediaformdata.instagramlink}>
                  <InstagramFilled />
                  <p>{socialmediaformdata.instagramname}</p>
                </Link> : null
                }

                </div>

                <div className="lg:mr-4 p-3 text-center">
              {/* itss only show  if he have name and  link */}
                {
                  socialmediaformdata.linkedinname && socialmediaformdata.linkedinlink ?
                  <Link to={socialmediaformdata.instagramlink}>
                  <LinkedinFilled />
                  <p>{socialmediaformdata.linkedinname}</p>
                </Link> : null
                }

                </div>
                <div className="lg:mr-4 p-3 text-center">
              {/* itss only show  if he have name and  link */}
                {
                  socialmediaformdata.youtubename && socialmediaformdata.youtubelink ?
                  <Link to={socialmediaformdata.instagramlink}>
                  <YoutubeFilled />
                  <p>{socialmediaformdata.youtubename}</p>
                </Link> : null
                }

                </div>
                
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {baiscdetailformdata.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
              {baiscdetailformdata.location} , {baiscdetailformdata.city} , <br /> {baiscdetailformdata.state} , {baiscdetailformdata.country}           
              <div className="lg:mr-4 p-3 text-center">
              {/* itss only show  if he have name and  link */}
                
                  <Link to={baiscdetailformdata.mapLink}>
                  <GoogleCircleFilled />
                </Link>
                </div>
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
              {baiscdetailformdata.jobTitle} - {baiscdetailformdata.company}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {baiscdetailformdata.Aboutme} 

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
    </div>
  );
}

