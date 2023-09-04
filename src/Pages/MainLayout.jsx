import { Col, Row } from 'antd'
import React from 'react'
import { CardNavbar } from './CardNavbar'
import Card from 'antd/es/card/Card'
import emolator from '../Assets/emulator.jpeg'

function MainLayout() {
  return (
    <>
    <Row> 
    <Col span={18}>
<CardNavbar />
<Card />
</Col>
<Col span={6}>

 {/*  emulator image */}
    <img src={emolator} alt="emulator" className="w-full h-full" />
    
</Col>
    </Row>
    </>
  )
}

export default MainLayout