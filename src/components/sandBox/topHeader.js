import React,{useState} from 'react'
import { Layout, Menu, Dropdown, Avatar  } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  
  const { Header } = Layout;

export default function TopHeader() {
    const [collapsed,setcollapsed] = useState(false)
    const changeCollapsed = ()=>{
        setcollapsed(!collapsed)
    }
    const menu = (
        <Menu>
          <Menu.Item key="1">超级管理员</Menu.Item>
          <Menu.Item danger key="2">退出登录</Menu.Item>
        </Menu>
    );
    return (
        <Header className="site-layout-background" style={{ padding: '0 16px' }}>
            {
                collapsed?<MenuUnfoldOutlined onClick={changeCollapsed}/>:<MenuFoldOutlined onClick={changeCollapsed}/>
            }
            <div style={{float:"right"}}>
                <span style={{marginRight:'20px'}}>欢迎admin回来</span>
                <Dropdown overlay={menu}>
                    <Avatar size={40} icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}
