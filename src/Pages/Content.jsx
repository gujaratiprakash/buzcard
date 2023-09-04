import React from 'react'
import { CardNavbar } from './CardNavbar'
import { Col, Row } from 'antd'
import emolator from '../Assets/emulator.jpeg'
import { Link } from 'react-router-dom'
import { EditOutlined } from '@ant-design/icons'

function Content() {
  return (
    <>
   <Row>
   <CardNavbar />
   <Col sm={24} md={24} lg={17} xl={17} xxl={17} className="overflow-y-auto"
          onScroll={(e)=>console.log(e)} >
          <div className="bg-white rounded m-2 p-2">
          
          <h1 className="text-2xl font-bold text-start">Pages & Content</h1>
          <h1 className="text-sm text-start">
            <Link to="/webcard/content">your actucall card link <EditOutlined /></Link>
          </h1>
          </div>
          <div
            className="scrollable-content overflow-y-auto"
            style={{
              height: "calc(100vh - 60px)", // Adjust the height as needed
            }}
          >
              <div
                className="border border-gray-300 rounded-md py-10 px-5 shadow-sm bg-white w-[65%] mx-auto"
                style={{ boxShadow: "0px 0px 10px 0px #0000001a" }}
              >
                <h1 className="text-2xl font-bold">Basic Information</h1>
                <p>This Information will be used to create your webcard</p>
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <div className="mt-2">
                      <input
                        id="Name"
                        name="Name"
                        type="text"
                        autoComplete="Name"
                        placeholder="Enter Your Full Name"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </Col>
   
   </Row>
    </>
  )
}

export default Content