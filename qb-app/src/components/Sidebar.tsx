
import { Layout, Menu, Avatar } from 'antd';
import { UserOutlined, DashboardOutlined, ReadOutlined } from '@ant-design/icons';
import Link from 'next/link';
import useUser from '../hooks/useUser';
import styled from 'styled-components';

const { Sider } = Layout;

const Sidebar = () => {
  const { user } = useUser();

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div style={{ padding: '16px', color: '#fff', textAlign: 'center' }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <div>{user?.name}</div>
        <div style={{ fontSize: '12px' }}>{user?.email}</div>
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link href="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<ReadOutlined />}>
          <Link href="/blogs">Blogs</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
