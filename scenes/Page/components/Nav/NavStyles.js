import styled from 'styled-components';
import { media } from '../../../../theme/theme';

const NavStyle = styled.nav`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;

  ul {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0.9rem 0;
    a {
      padding: 1rem 2rem;
      line-height: 2rem;
      color: ${props => props.theme.white};
      font-weight: 900;
      text-transform: capitalize;
      transition: all 0.2s;
      :hover {
        border-bottom: 0.2rem solid rgba(255, 255, 255, 0.8);
      }
    }
  }

  .changeLang {
    display: inline-block;
    position: absolute;
    top: 1.2rem;
    right: 2rem;
    background: no-repeat;
    border: 0;
    color: ${props => props.theme.white};
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.5rem;
    :hover {
      cursor: pointer;
    }
  }

  .logo {
    position: absolute;
    top: 0;
    left: -8rem;
    color: ${props => props.theme.linkHover};
    font-size: 2.5rem;
    background-color: ${props => props.theme.white};
    padding: 0 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.2s;
  }

  :hover {
    .logo {
      left: 0;
    }
  }

  .phoneMenu {
    display: none;
  }

  ${media.small`    
    height: 4rem;
    .changeLang {      
      top: 0;
      right: 8rem;
      line-height: 1.5;
    }

    .menuToggle {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 1.2rem;
      right: 2.5rem;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;

      .phoneMenu {
        display: block;      
      }      
      
      input {
        display: flex;
        width: 4rem;
        height: 2rem;
        position: absolute;
        cursor: pointer;
        opacity: 0;
        z-index: 2;
      }

      span {
        display: flex;
        width: 2.9rem;
        height: 0.2rem;
        margin-bottom: 0.5rem;
        position: relative;
        background: ${props => props.theme.white}
        border-radius: 0.3rem;
        z-index: 1;
        transform-origin: 0.5rem 0;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      }

      span:first-child {
        transform-origin: 0% 0%;
      }

      span:nth-last-child(2) {
        transform-origin: 0% 100%;
      }

      input:checked ~ span {
        opacity: 1;
        transform: rotate(45deg) translate(-0.3rem, -0.1rem);
        background: ${props => props.theme.linkHover};
      }
      input:checked ~ span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      input:checked ~ span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -0.1rem);
      }

      input:checked ~ ul {
        transform: none;
        margin: ${props =>
          props.theme.isRTL ? '-5rem -3rem 0 0' : '-5rem 0 0 -12.6rem'};
      }

      ul {
        flex-direction: column;
        position: absolute;
        width: 18rem;
        height: 40rem;
        box-shadow: 0 0 1rem #85888c;
        margin: ${props =>
          props.theme.isRTL ? '-5rem -12.6rem 0 0' : '-5rem 0 0 -12.6rem'};
        padding: 5rem 0;
        padding-top: 12.5rem;
        background-color: #f5f6fa;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: ${props =>
          props.theme.isRTL ? 'translate(104%, 0)' : 'translate(104%, 0)'};
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
        li {
          padding: 1rem 0;
          transition-delay: 2s;

          a {
            color: ${props => props.theme.black};
          }
        }
      }
    }
  `}
`;

export { NavStyle };
