import React, { useState } from 'react';
import {
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
export const CardNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
 
  // theme change
  const [theme, setTheme] = useState('light');
  const [current, setCurrent] = useState('mail');
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
    items('Details', '/webcard/details'),
    items('Content', '/webcard/content'),
    items('Settings', '/webcard/settings'),
    items('Themes', '/webcard/themes'),
    items('services', '/webcard/services'),
  ];

  return (
    <Layout 
   
    >
        <Menu

        alignItems='center'
        mode="horizontal"
          onClick={onClick}
          theme="dark"
          items={menu_items}
          style={{
            padding: '0px 0px 0px 0px',
            minWidth: '100%',
            backgroundColor: '#fff',
            color: 'purple',
            alignItems: 'center',
            }}
        />
    </Layout>
  );
};
