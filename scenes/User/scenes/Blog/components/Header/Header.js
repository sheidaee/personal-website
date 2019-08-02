import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tags from '../Tags/Tags';
import { withNamespaces } from '../../../../../../services/api/localization';

const HeaderStyle = styled.header`
  h1 {
    font-size: 3.4rem;
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
    }
  }
`;

const Header = props => {
  const { t } = props;
  return (
    <HeaderStyle>
      <h1>
        <span>{t('blog_title')}</span>
      </h1>
      <p>{t('blog_description')}</p>
      <Tags />
    </HeaderStyle>
  );
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Header);
