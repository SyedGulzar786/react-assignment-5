import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import {
    Link
    // , useNavigate
} from 'react-router-dom';

const { Header, Content, Footer } = Layout;
// const items = [{ key: '/home', label: 'Home' }, { key: '/profile', label: 'Profile' }] ;

const AuthLayout = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // const navigate = useNavigate();


    return (
        <Layout>
            {/* <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }} */}
            {/* > */}
                {/* <div className="demo-logo" /> */}
                {/* <Menu
                    onClick={(data) => {
                        navigate(data.key) }}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                /> */}
                {/* <div className='d-flex gap-3 h-100'>
                    <Link to={"/profile"}><p className='text-white'>Profile</p></Link>
                    <Link to={"/home"}><p className='text-white'>Home</p></Link>

                </div> */}
            {/* </Header> */}
            <Content className='vh-100 d-flex justify-content-center align-items-center' style={{ padding: '0 48px' }}>

                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        marginTop: 16,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        maxWidth: '100%',
                        width: '800px',
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default AuthLayout;