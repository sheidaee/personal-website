import React from 'react';
import styled from 'styled-components';

const TagsStyle = styled.ul`
  text-align: center;
  margin: 3rem 0;
  li {
    display: inline-block;
    margin: 0.7rem;
    color: ${props => props.theme.black};
    background: ${props => props.theme.lightGrey2};
    cursor: default;
    font-size: 1.2em;

    a {
      display: inline-block;
      padding: 0.5rem 1rem;
      :hover {
        color: ${props => props.theme.white};
        background-color: #74b9ff;
      }
    }
  }
`;

const Tags = () => (
  <TagsStyle>
    <li>
      <a href="category/css/">CSS</a>
    </li>
    <li>
      <a href="category/es6/">ES6</a>
    </li>
    <li>
      <a href="category/html5/">HTML5</a>
    </li>
    <li>
      <a href="category/jquery/">JQuery</a>
    </li>
    <li>
      <a href="category/php/">PHP</a>
    </li>
  </TagsStyle>
);

export default Tags;
