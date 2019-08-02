import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Meta from './components/Meta';
import Footer from './components/Footer';
import { theme, media } from '../../theme/theme';

const Inner = styled.main`
  min-height: calc(70vh);
`;

const GlobalStyle = createGlobalStyle`  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;

    /* width < 1200 */
    ${media.large`
      font-size: 62.5%; /* 1rem = 9px, 9/16 = 56.25% */    
    `}

    /* width < 992 */
    ${media.medium`
      font-size: 50%; /* 1rem = 8px, 8/16 = 50% */
    `}

    /* width < 770 */    
    ${media.small`
      font-size: 43.75%; /* 1rem = 7px, 8/16 = 43.75% */
    `}

    /* width < 670 */    
    ${media.extraSmall`
      font-size: 37.5%; /* 1rem = 7px, 8/16 = 43.75% */
    `}
    
    @media (min-width: ${1400 / 16}em) {
      font-size: 75%; /* 1rem = 12px, 12/16 */
    }
  }

  *, 
  *:before, 
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }  

  body {    
    text-rendering: optimizeLegibility;    
    color:${props => props.theme.black};
    overflow-x: hidden;
  }   

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
    transition: all .2s;
    :hover {
      color: ${props => props.theme.linkHover};
    }
  }       

  h1,
  h2,
  h3 {
    font-weight: 400;
  }

  h1 {
    font-size: 6rem;
  }
    
  h3 {
    font-size: 3.2rem;    
  }  
  
  h4 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    font-weight: 300;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }

  .container {
    max-width: 114rem;
    margin: 0 auto;
  }

  .hideEl {
    display: none;
  }
`;

class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initLng: PropTypes.string.isRequired,
  };

  render() {
    const { children, initLng } = this.props;
    return (
      <ThemeProvider theme={theme(initLng)}>
        <>
          <GlobalStyle />
          <Header />
          <Meta initLng={initLng} />
          <Inner>{children}</Inner>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
