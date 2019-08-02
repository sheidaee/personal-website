import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withNamespaces } from '../../../../../../services/api/localization';

const PaginationStyle = styled.div`
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
  border: 0.1rem solid ${props => props.theme.lightGrey};
  border-radius: 1rem;
  & > * {
    margin: 0;
    padding: 1.5rem 3rem;
    border-right: 0.1rem solid ${props => props.theme.lightGrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;
const Pagination = props => {
  const { t } = props;

  return (
    <PaginationStyle>
      <a href="first" aria-disabled="true">
        {t('first')}
      </a>
      <a href="prev">{t('prev')}</a>
      <a href="page-1">1</a>
      <a href="page-2">2</a>
      <a href="next">{t('next')}</a>
      <a href="last" aria-disabled="true">
        {t('last')}
      </a>
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Pagination);
