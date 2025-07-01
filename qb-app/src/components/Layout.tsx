
import { Layout as AntLayout } from 'antd';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const { Content } = AntLayout;

const StyledLayout = styled(AntLayout)`
  min-height: 100vh;
`;

const Layout = ({ children }: { children: React.ReactNode }) => (
  <StyledLayout>
    <Sidebar />
    <AntLayout>
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
        {children}
      </Content>
    </AntLayout>
  </StyledLayout>
);

export default Layout;
