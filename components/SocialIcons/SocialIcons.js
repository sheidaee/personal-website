import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { isHome } from '../../services/api/utils';

const SocialIconsStyle = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 2rem;
  a {
    display: inline-block;
    font-family: 'Lato', sans-serif;
    font-size: 2.5rem;
    padding: 0 1rem;
    color: ${props =>
      isHome(props.pathName) ? props.theme.white : props.theme.grey};
    border: 0.1rem solid
      ${props =>
        isHome(props.pathName) ? props.theme.white : props.theme.grey};
    transition: all 0.2s;
    :hover {
      color: ${props =>
        isHome(props.pathName) ? '#e4e4e4' : props.theme.black};
    }
  }
`;

const SocialIcons = ({ router: { pathname } }) => (
  <SocialIconsStyle pathName={pathname}>
    <li>
      <a
        href="https://www.linkedin.com/in/sheidaee/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/sheidaee"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithubAlt />
      </a>
    </li>
  </SocialIconsStyle>
);

SocialIcons.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(SocialIcons);
