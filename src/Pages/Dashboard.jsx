import { Button, Card, Col, Row } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const userData = location.state?.userData || {}; // Default to an empty object if userData is not available

  return (
    <>
      <div className="container mx-auto mt-8">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} className=" justify-center">
            <Card
              title={`${userData.name}'s Profile`}
              className="h-full flex flex-col justify-center items-center"
            >
              <p>Email: {userData.email}</p>
              <p>Contact: {userData.mobile}</p>
              <p>Location: {userData.location}</p>
              <div className='flex justify-center'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 m-2 rounded">
                  <Link to="/webcard/details">Edit Profile</Link>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5 m-2 rounded">
                  <Link to="/webcard/preview">View Your card</Link>
                </button>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} className=" justify-center">
            <Link to="/webcard/details">
              <Card className="h-full flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center" style={{ height: '100px', width: '100px' }}>
                  <div className="text-3xl font-bold">+</div>
                  <div>Create Card</div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
