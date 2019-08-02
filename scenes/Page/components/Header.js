import styled from 'styled-components';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import Nav from './Nav/Nav';
import { isHome } from '../../../services/api/utils';

NProgress.configure({ showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const HeaderStyle = styled.header`
  position: relative;
  z-index: 2;
  background: ${props =>
    isHome(props.pathName) ? props.theme.highlightBlue : props.theme.menuBg};

  box-shadow: ${props =>
    isHome(props.pathName) ? 'none' : `0 0.2rem 0.3rem 0 ${props.theme.blue}`};
`;

const Header = ({ router: { pathname } }) => (
  <HeaderStyle pathName={pathname}>
    <Nav />
  </HeaderStyle>
);

Header.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(Header);
