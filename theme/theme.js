import { css } from 'styled-components';
import { isRTL, RTL_LANGS, getAlign } from '../services/api/utils';

export const theme = initLng => ({
  // red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#ededed',
  lightGrey2: '#e4e4ea',
  lightGrey3: '#d4d4d4',
  // offWhite: '#ededed',
  // lightBlue: '#d4d4d4',
  highlightBlue: 'rgba(131, 128, 191, 0.1)',
  menuBg: '#74b9ff',
  blue: '#4f93d8',
  darkBlue: '#60a3bc',
  headerBorder: '#e0eafc',
  linkHover: '#7d4c67',
  white: 'white',
  green: '#10ac84',
  maxWidth: '100rem',
  bs: '0 1.2rem 2.4rem 0 rgba(0, 0, 0, 0.09)',
  isRTL: isRTL(RTL_LANGS, initLng),
  themeAlign: getAlign(RTL_LANGS, initLng),
  themeNotAlign: getAlign(RTL_LANGS, initLng) === 'left' ? 'right' : 'left',
});

const sizes = {
  large: 1200,
  medium: 992,
  small: 770,
  extraSmall: 670,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
