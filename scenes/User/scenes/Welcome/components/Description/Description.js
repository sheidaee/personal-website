import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../../../../../theme/theme';
import { withNamespaces } from '../../../../../../services/api/localization';

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(5rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const DescriptionStyle = styled.div`
  ${props => `padding-${props.theme.themeAlign}`} : 6rem;
  font-size: 2rem;
  letter-spacing: ${props => (props.theme.isRTL ? '' : '0.2rem')};
  color: ${props => props.theme.white};
  font-weight: 700;
  backface-visibility: hidden;

  h1 {
    text-transform: capitalize;

    animation: ${moveInLeft} 1s ease-out;

    /* width < 670 */
    ${media.extraSmall`
      font-size: 5rem;
    `}
  }

  p {
    animation: ${moveInRight} 1s ease-out;
  }
`;

const Description = props => {
  const { t } = props;

  return (
    <DescriptionStyle>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </DescriptionStyle>
  );
};

Description.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces('index')(Description);
