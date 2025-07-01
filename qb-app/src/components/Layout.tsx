
import { Layout as AntLayout } from 'antd';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import useUser from '../hooks/useUser';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  return (
  <StyledLayout>
    <Sidebar user={user}/>
    <AntLayout>
      <AntLayout.Header style={{ background: '#fff', padding: 0 }}>
        <h1 style={{ margin: '0 16px', color: '#000' }}>Welcome {user?.name}</h1>
      </AntLayout.Header>
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
        {children}
      </Content>
    </AntLayout>
  </StyledLayout>
  );
};

export default Layout;
