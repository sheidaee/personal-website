import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TimelineItem from './components/TimelineItem/TimelineItem';
import { media } from '../../../../theme/theme';
import { withNamespaces } from '../../../../services/api/localization';

const WorkStyle = styled.div`
  margin-bottom: 6rem;
  .content {
    p {
      margin-bottom: 4rem;
    }
  }

  h1 {
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;
    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
    }
  }

  .experience-timeline {
    position: relative;
    :before {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      ${props => props.theme.themeAlign}: 27rem;
      ${props => props.theme.themeNotAlign}: auto;
      height: 100%;
      width: 0.3rem;
      background: ${props => props.theme.green};
      z-index: 0;
    }
  }

  /* width < 670 */
  ${media.extraSmall`            
      .experience-timeline { {
        :before {      
          ${props => props.theme.themeAlign}: 7rem;   
        }
      }
  `}
`;

const Work = props => {
  const { t } = props;
  return (
    <WorkStyle>
      <header>
        <h1>
          <span>{t('experience')}</span>
        </h1>
      </header>
      <div className="container content experience-timeline">
        <TimelineItem />
      </div>
    </WorkStyle>
  );
};

Work.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Work);
