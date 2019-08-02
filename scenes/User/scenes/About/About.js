import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Skills from './components/Skills/Skills';
import { withNamespaces } from '../../../../services/api/localization';
import BlockHeader from '../../../../components/ui/BlockHeader/BlockHeader';

const AboutStyle = styled.div`
  padding: 0 11rem;

  .content {
    p {
      margin-bottom: 4rem;
    }
  }
`;

class About extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <AboutStyle className="container">
          <BlockHeader>{t('common:about')}</BlockHeader>
          <div className="content">
            <p>{t('about_page:about_description')}</p>

            <p>
              I am a software engineer @ Visionist, Inc and currently live in
              the D.C. metro area. My strongest skill set is full stack
              javascript development. I have experience ranging from building
              feature rich UI's with React and Redux to building out scalable
              microservices and api's with Express. I enjoy keeping up with
              current trends and best practices in the industry and believe
              continuous learning is key to being a great developer. Some of my
              current interests include functional programming (learning elixir
              and incorporating fp into my day to day code), all things React,
              and Go.
            </p>
          </div>
        </AboutStyle>
        <Skills />
      </>
    );
  }
}

export default withNamespaces()(About);
