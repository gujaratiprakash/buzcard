import { Radio  } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import card1 from '../Assets/card1.png';
import card2 from '../Assets/card2.png';
export function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('template1'); // Default template selection
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // i want to fetch data into annother omponent
    const data = {
      name,
      jobTitle,
      company,
      location,
      email,
      mobile,
      aboutMe,
      selectedTemplate,
    };

    console.log(data);
    navigate('/webcard', { state: { userData: data, selectedTemplate } });
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8 border-1 border-gray-200">
      <div className="max-w-md w-full space-y-8 border-4 border-gray-200 p-4 rounded-lg bg-white ">
      
      <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900">
            Create Card
          </h2>
          <div>
  <div className="flex justify-center mt-8">
    <div className="max-w-2xl rounded-full overflow-hidden shadow-xl bg-gray-50">
      <div className="m-4">
        <label className="flex justify-center items-center h-32 w-32 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300 rounded-full">
          <div className="flex flex-col items-center justify-center ml-10">
            {/* Replace this SVG with your user icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-blue-400 group-hover:text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 14c3.59 0 6.58-2.89 6.58-6.47 0-3.58-2.99-6.47-6.58-6.47-3.58 0-6.58 2.89-6.58 6.47C5.42 11.11 8.41 14 12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21v-2m0-4v-4m-4 6h-4m-6-4H3"
              />
            </svg>
            <p className="text-sm text-gray-400 group-hover:text-blue-600 pt-1 lowercase tracking-wider">
              User
            </p>
          </div>
          <input type="file" className="opacity-0" />
        </label>
      </div>
    </div>
  </div>
</div>


        <form className="mt-8 space-y-6" action="#" method="POST">
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Job Title
            </label>
            <div className="mt-1">
              <input
                id="job-title"
                name="job-title"
                type="text"
                required
                onChange={(e) => setJobTitle(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <div className="mt-1">
              <input
                id="company"
                name="company"
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Location
            </label>
            <div className="mt-1">
              <input
                id="location"
                name="location"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <div className="mt-1">
              <input
                id="mobile"
                name="mobile"
                type="number"
                autoComplete="current-mobile"
                onChange={(e) => setMobile(e.target.value)}
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="Aboutme" className="block text-sm font-medium text-gray-700">
              About Me
            </label>
            <textarea type='textarea' onChange={(e) => setAboutMe(e.target.value)} className='border-2 border-gray-300 p-2 rounded-lg w-full' />
          </div>


          <div>
          <div className="flex justify-center mt-8">
            <Radio.Group
              onChange={(e) => setSelectedTemplate(e.target.value)}
              value={selectedTemplate}
            >
              <Radio value="template1">
              <img src={card1} alt="card1" className="w-32 h-32 text-blue-400 group-hover:text-blue-600" />
              Template 1</Radio>
              <Radio value="template2">
              <img src={card2} alt="card1" className="w-32 h-32 text-blue-400 group-hover:text-blue-600" />
              Template 2</Radio>
              {/* Add more Radio.Button components for additional templates */}
            </Radio.Group>
          </div>
        </div>


{/* Add more radio buttons for additional templates */}

          <div>  
      <button
      onClick={handleFormSubmit}
      htmlFor="submit"
        type="submit"
        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save and Continue
      </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-600">
          You can change your details anytime
        </p>
      </div>
    </div>
  );
}


// import { Button } from 'antd';
// import React, { useState } from 'react';


// export const Signup = () => {
//   const [link, setLink] = useState('');
  
//   const handleLinkChange = (e) => {
//     setLink(e.target.value);
//   };

//   const handleIconClick = () => {
//     if (link) {
//       window.open(link, '_blank'); // Open the link in a new tab
//     }
//   };

//   return (
//     <div className="flex items-center space-x-2">
//       <input
//         type="text"
//         placeholder="Enter Link"
//         value={link}
//         onChange={handleLinkChange}
//         className="border rounded-md px-2 py-1"
//       />
//       <Button
//         onClick={handleIconClick}
//         className={`cursor-pointer ${link ? 'text-blue-500' : 'text-gray-400'}`}
//       />
//     </div>
//   );
// };

