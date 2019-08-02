import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { media } from '../../../../../../theme/theme';
import DeletePost from '../../../../../../components/DeletePost/DeletePost';
import { withNamespaces } from '../../../../../../services/api/localization';

const PostStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 6rem;
  border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
  padding: 3rem 0;

  /* width < 670 */
  ${media.extraSmall`            
    grid-template-columns: 1fr;
  `}

  :hover {
    .post-image {
      transform: scale(1.1);
    }
  }

  .post-image {
    transition: all 0.2s;
    transform: scale(1);
    max-width: 30rem;
    object-fit: cover;
  }
`;

const PostC = ({ post, t, refetchHandler }) => {
  const { id, title, largeImage } = post;

  return (
    <>
      <PostStyled>
        {largeImage && (
          <img
            src={largeImage}
            className="post-image"
            width="450"
            alt={title}
          />
        )}
        <h2 className="post-title">
          <Link
            href={{
              pathname: '/post',
              query: { id },
            }}
          >
            <a>{title}</a>
          </Link>
        </h2>
        <DeletePost id={id}>{t('form:delete')}</DeletePost>
      </PostStyled>
    </>
  );
};
PostC.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(PostC);
