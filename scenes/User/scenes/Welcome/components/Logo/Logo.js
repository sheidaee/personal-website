import React from 'react';
import styled from 'styled-components';
import { withNamespaces } from '../../../../../../services/api/localization';

const LogoStyle = styled.div`
  background: ${props =>
    props.theme.isRTL
      ? 'url(/static/images/me-welcome-right.jpg)'
      : 'url(/static/images/me-welcome-left.jpg)'};
  background-repeat: no-repeat;
  background-size: cover;
  width: 22rem;
  height: 22rem;
  border: 0.8rem solid ${props => props.theme.white};
  background-position: right;
  background-color: #d3e1e4;
  border-radius: 50%;
  background-position: center;
`;

const Logo = () => <LogoStyle />;

export default withNamespaces()(Logo);
