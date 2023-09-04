import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Headers from './Header';
const { Header, Sider, Content } = Layout;
export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  function items(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  

  const onClick = (e) => {
    navigate(e.key);
  };

  const menu_items = [  
    items('Web card', '/webcard/details', <UserOutlined />),
    items('NFT Card', '/nftcard', <UserOutlined />),   
     items('Contacts', '/contacts', <UserOutlined />),
     items('Leads', '/nftcard', <UserOutlined />),   
     items('Analytics', '/contacts', <UserOutlined />),
     items('Accounts', '/accounts', <UserOutlined />),
     items('Referral', '/accounts', <UserOutlined />),
  ];

  return (
    <Layout
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          theme="dark"
          mode="inline"
        defaultSelectedKeys={['1']}
          items={menu_items}
          style={{
      backgroundColor: '#fff',
      minHeight:'100vh',
      color: 'purple',
      padding: '10px 10px 0px 0px',
      margin: '0px 0px 10px 0px',
    }} 
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
        <Headers />
        </Header>
        <Outlet />
      </Layout>
    </Layout>
  );
};
