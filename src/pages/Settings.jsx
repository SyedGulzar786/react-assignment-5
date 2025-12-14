import { Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom'
import {
    SettingOutlined
} from '@ant-design/icons';


function getItem(label, key, children) {
    return {
        label,
        key,
        children,
        // icon,
    };
}
const SettingsPage = () => {
    const navigate = useNavigate();
    const items = [
        getItem('Manage Settings', 'sub1', [
            { ...getItem('Messages', '3'), onClick: () => navigate('/settings/messages') },
            { ...getItem('Tasks', '4'), onClick: () => navigate('/settings/tasks') },
        ])
    ]
    return (
        <div>
            <h1><SettingOutlined /> Settings</h1>
            <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
            <Outlet />
        </div>
    )
}

export default SettingsPage