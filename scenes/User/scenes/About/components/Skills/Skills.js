import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../../../../../../theme/theme';
import Skill from './components/Skill/Skill';
import { withNamespaces } from '../../../../../../services/api/localization';

const SkillsStyle = styled.div`
  position: relative;
  margin-bottom: 6rem;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 140%;
    top: 26%;
    -webkit-transform: skewY(-12deg);
    transform: skewY(-12deg);
    background: #f6f9fc;
  }

  .inner {
    padding: 0 11rem 6rem 11rem;
    overflow: hidden;

    /* width < 670 */
    ${media.extraSmall`      
      padding: 0;
    `}
  }
  h2 {
    font-size: 6rem;
  }

  h2,
  h3 {
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;

    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
      text-transform: uppercase;
    }
  }

  .skill-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    gap: 4rem;
    text-align: center;

    /* width < 670 */
    ${media.extraSmall`
      grid-template-columns: 1fr;      
      justify-items: center;
    `}
  }
`;

const Skills = props => {
  const { t } = props;
  return (
    <SkillsStyle>
      <div className="inner container">
        <h2>
          <span>{t('skills')}</span>
        </h2>
        <div className="skill-columns">
          <Skill />
        </div>
      </div>
    </SkillsStyle>
  );
};

Skills.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces('common')(Skills);
