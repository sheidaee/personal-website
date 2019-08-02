import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Pagination from './components/Pagination/Pagination';
import Post from './components/Post/Post';
import Header from './components/Header/Header';

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      title
      description
      image
      largeImage
    }
  }
`;

const BlogStyle = styled.div`
  padding: 0 12rem;
  margin-bottom: 3rem;

  .content {
    p {
      margin-bottom: 4rem;
    }
  }

  footer {
    text-align: center;
  }
`;

const Blog = () => (
  <BlogStyle className="container">
    <Header />
    <div className="content">
      <Query query={ALL_POSTS_QUERY}>
        {({ data, error, loading }) => {
          if (error) return <p>Error: {error.message}</p>;

          if (loading) return <p>Loading...</p>;

          return data.posts.map(post => <Post key={post.id} post={post} />);
        }}
      </Query>
    </div>
    <footer>
      <Pagination />
    </footer>
  </BlogStyle>
);

export default Blog;
export { ALL_POSTS_QUERY };
