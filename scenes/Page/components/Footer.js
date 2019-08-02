import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import SocialIcons from '../../../components/SocialIcons/SocialIcons';
import { isHome } from '../../../services/api/utils';
import { withNamespaces } from '../../../services/api/localization';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
`;

const Footer = ({ router: { pathname } }) => (
  <FooterStyle>{!isHome(pathname) && <SocialIcons />}</FooterStyle>
);

Footer.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withNamespaces()(withRouter(Footer));
