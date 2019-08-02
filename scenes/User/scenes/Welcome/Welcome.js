import React, { Component } from 'react';
import styled from 'styled-components';
import SocialIcons from '../../../../components/SocialIcons/SocialIcons';
import { media } from '../../../../theme/theme';
import Description from './components/Description/Description';
import Logo from './components/Logo/Logo';

const WelcomeStyles = styled.section`
  position: absolute;
  top: 0;
  z-index: 1;
  clip-path: polygon(100% 0, 100% 77%, 50% 100%, 0 77%, 0 0);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(
      0.5turn,
      rgba(165, 79, 82, 0.5),
      rgb(74, 59, 89)
    ),
    url(/static/images/welcome-bg.jpg);
  background-size: cover;

  .introduction {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(131, 128, 191, 0.1);
    padding: 2rem;
    border-radius: 0.6rem;
    margin-bottom: 6rem;

    /* width < 670 */
    ${media.extraSmall`
      flex-direction: column;
    `}
  }
`;

class Welcome extends Component {
  render() {
    return (
      <WelcomeStyles>
        <div className="introduction">
          <Logo />
          <Description />
        </div>
        <SocialIcons />
      </WelcomeStyles>
    );
  }
}

export default Welcome;
