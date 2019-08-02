import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlockHeaderStyle = styled.header`
  h1 {
    font-size: 6rem;
    padding: 3rem;
    text-align: center;
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
    }
  }
`;

const BlockHeader = ({ children }) => (
  <BlockHeaderStyle>
    <h1>
      <span>{children}</span>
    </h1>
  </BlockHeaderStyle>
);

BlockHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlockHeader;
