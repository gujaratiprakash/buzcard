import { ExclamationCircleOutlined , Email, MailFilled, ContactsFilled } from '@ant-design/icons';
import { Card, Col, Row } from 'antd';
import React from 'react'
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    const userData = location.state?.userData || {}; // Default to an empty object if userData is not available
  return (
    <>
    <div className="container mx-auto text-lg">
    <Row gutter={16}>
    <Col span={24} className=' text-2xl mt-2 ml-5'>Links</Col>
    <Col span={12}>
      <Card  bordered={false} className='text-lg m-2 bg-gray-100'>
      <MailFilled /> {userData.email}
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false} className='text-lg m-2 bg-gray-100'>
      <ContactsFilled /> {userData.mobile}
      </Card>
    </Col>
  </Row>
    <div>
    <Col span={24} className=' text-2xl mt-5 ml-5'>About</Col>
    <Col span={24} className=' text-lg m-5'>
        {userData.aboutMe}
    </Col>
    </div>
    </div>

    </>
  )
}

export default About