import React from 'react'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './index.css'

const { Sider } = Layout;

const menuList = [
  {
    key: '/home',
    title: '首页',
    icon: <UserOutlined />
  },
  {
    key: '/user-manage',
    title: '用户管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/user-manage/list',
        title: '用户列表',
        icon: <UserOutlined />,
      }
    ]
  },
  {
    key: '/right-manage',
    title: '权限管理',
    icon: <UserOutlined />,
    children: [
      {
        key: '/right-manage/role/list',
        title: '角色列表',
        icon: <UserOutlined />,
      },
      {
        key: '/right-manage/right/list',
        title: '权限列表',
        icon: <UserOutlined />,
      }
    ]
  },
]


export default function slideMenu() {
    return (
        <Sider trigger={null} collapsible collapsed={false}>
          <div className="logo">全球新闻发布管理系统</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
    )
}
