import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import renderHtml from 'react-render-html';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Error from '../../../../components/ui/DisplayError/DisplayError';
import { withNamespaces } from '../../../../services/api/localization';
import DeletePost from '../../../../components/DeletePost/DeletePost';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      title
      description
      image
      largeImage
    }
  }
`;

const SinglePostStyle = styled.article`
  margin: 3rem auto;
  margin-bottom: 3rem;
  padding: 2rem 12rem;

  h1 {
    font-size: 6rem;
    padding: 3rem 0 2rem 0;
    border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
  }

  .content {
    p {
      margin-bottom: 4rem;
    }
  }

  .post {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;

    img {
      display: inline-block;
      height: auto;
      margin: 4rem auto;
      max-width: 100%;
    }
  }

  footer {
    text-align: center;
  }
`;

const SinglePost = props => {
  const { id, t } = props;

  return (
    <Query query={SINGLE_POST_QUERY} variables={{ id }}>
      {({ data, error, loading }) => {
        const { post } = data;
        const { title, largeImage, description } = post;

        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!data.post) return <p>No item found for {id}</p>;

        return (
          <SinglePostStyle className="container">
            <header>
              <h1>
                <span>{title}</span>
              </h1>
            </header>
            <div className="content">
              <div className="post">
                {largeImage && (
                  <img
                    src={largeImage}
                    className="post-image"
                    width="450"
                    alt={title}
                  />
                )}
                {description && <p>{renderHtml(JSON.parse(description))}</p>}
              </div>
            </div>
            <footer>
              <Link
                href={{
                  pathname: '/edit_post',
                  query: { id },
                }}
              >
                <a>{t('form:edit')}</a>
              </Link>
              <DeletePost id={id}>Delete</DeletePost>
            </footer>
          </SinglePostStyle>
        );
      }}
    </Query>
  );
};

SinglePost.propTypes = {
  id: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(SinglePost);
