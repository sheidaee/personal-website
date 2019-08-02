import React from 'react';
import styled from 'styled-components';
import { media } from '../../../../../../../../theme/theme';

const SkillColumn = styled.div`
  box-shadow: 0 0.2rem 1rem 0 rgba(134, 141, 155, 0.2);
  background: ${props => props.theme.white};
  border: 0.1rem solid ${props => props.theme.lightGrey};
  transition: all 0.2s;
  transform: translateY(0);
  padding-bottom: 3rem;
  border-radius: 0.8rem;

  /* width < 670 */
  ${media.extraSmall`      
      width: 40rem;                  
    `}

  :hover {
    transform: translateY(-0.6rem);
    box-shadow: 0 2rem 2.4rem 0 rgba(134, 141, 155, 0.2);
  }

  ul {
    list-style: none;
    text-align: center;
    li {
      line-height: 4.5rem;
      display: inline-block;
      width: 70%;
      :not(:last-child) {
        border-bottom: 0.1rem solid ${props => props.theme.lightGrey};
      }
    }
  }
`;

const Skill = () => (
  <>
    <SkillColumn>
      <h3>
        <span>Core</span>
      </h3>
      <ul>
        <li>JavaScript</li>
        <li>CSS3</li>
        <li>HTML5</li>
        <li>PHP</li>
        <li>MySQL</li>
        <li>Node.js</li>
      </ul>
    </SkillColumn>
    <SkillColumn>
      <h3>
        <span>LIBRARIES</span>
      </h3>
      <ul>
        <li>React.js</li>
        <li>jQuery</li>
        <li>WordPress</li>
        <li>Symfony</li>
        <li>Sass</li>
      </ul>
    </SkillColumn>
  </>
);

export default Skill;
