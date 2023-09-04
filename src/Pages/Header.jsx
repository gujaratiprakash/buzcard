import React from 'react'
import wcard from '../Assets/wcard.png'
import { Col, Row } from 'antd'

function Headers() {
  return (
    <>
  <Row>
  <Col span={12}>
    <img src={wcard} alt="wcard" className="w-32 h-10 m-2" />
     </Col>
     <Col span={12} className='text-end'>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
     </svg>
    </Col>
  </Row>
    </>
  )
}

export default Headers