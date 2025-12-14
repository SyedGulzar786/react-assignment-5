import React, { useState } from 'react';
import {
    HomeOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ProfileOutlined,
    SettingOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { auth, signOut } from '../config/firebase.js';
import { useNavigate } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const logoutUser = () => {
        signOut(auth).then(() => {
            console.log("logout successful")
        }).catch((error) => {
            console.log("error", error)
        });
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <ProfileOutlined />,
                            label: 'Profile',
                            onClick: () => navigate('/profile/:username')
                        },
                        {
                            key: '2',
                            icon: <HomeOutlined />,
                            label: 'Home',
                            onClick: () => navigate('/home')
                        },
                        {
                            key: '3',
                            icon: <SettingOutlined />,
                            label: 'Settings',
                            onClick: () => navigate('/settings')
                        },
                        {
                            key: '4',
                            icon: <UserOutlined />,
                            label: 'Users',
                            onClick: () => navigate('/users')
                        },
                        {
                            key: '5',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            onClick: () => logoutUser()
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    className='vh-100'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default AppLayout;