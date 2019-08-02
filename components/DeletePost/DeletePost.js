import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const DELETE_POST_MUTATION = gql`
  mutation DELETE_POST_MUTATION($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

const DeletePostC = ({ id, children }) => (
  <Mutation mutation={DELETE_POST_MUTATION} variables={{ id }}>
    {(deletePost, { error }) => (
      <button
        onClick={() => {
          if (confirm('Are you sure you want to delete this item?')) {
            deletePost();
          }
        }}
      >
        {children}
      </button>
    )}
  </Mutation>
);

DeletePostC.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DeletePostC;
