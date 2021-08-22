import React from 'react'
import SlideMenu from '../../components/sandBox/slideMenu'
import TopHeader from '../../components/sandBox/topHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './Home/home'
import UserList from './user-manage/userList'
import RoleList from './right-manage/roleList'
import RightList from './right-manage/rightList'
import NoPerMission from './noPermission/NoPerMission'

import './newsSandBox.css'

import { Layout } from 'antd';
const { Content } = Layout;

export default function NewsSandBox() {
    return (
            <Layout>
                <SlideMenu></SlideMenu>
                <Layout className="site-layout">
                    <TopHeader></TopHeader>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/user-manage/list" component={UserList} />
                            <Route path="/right-manage/role/list" component={RoleList} />
                            <Route path="/right-manage/right/list" component={RightList} />
                            
                            <Redirect from="/" to="/home" exact />
                            <Route path="*" component={NoPerMission} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
    )
}
