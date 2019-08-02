import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../../../../components/Form/Form';
import { withNamespaces } from '../../../../services/api/localization';

const ContactStyle = styled.div`
  padding: 0 12rem;
  margin: 0 auto;

  h1 {
    padding: 3rem;
    text-align: center;
    margin-bottom: 2rem;

    span {
      border-bottom: 0.2rem solid ${props => props.theme.headerBorder};
      padding-bottom: 2rem;
    }
  }

  .content {
    box-shadow: 0 0 0.5rem 0.3rem rgba(0, 0, 0, 0.05);
    background: rgba(0, 0, 0, 0.02);
    border: 0.1rem solid #eee;
    padding: 2rem;
    margin-bottom: 4rem;
    overflow: hidden;
    p {
      margin-bottom: 2rem;
      font-size: 1.7rem;
      font-weight: 700;
    }
  }
`;

const Contact = props => {
  const { t } = props;

  return (
    <ContactStyle className="container">
      <header>
        <h1>
          <span>{t('contact')}</span>
        </h1>
      </header>
      <div className="content">
        <p>{t('contact_description')}</p>
        <Form>
          <fieldset>
            <label htmlFor="title">
              <div>{t('title')}</div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required=""
                defaultValue="The title"
              />
              <span className="input-focus-effect theme-bg" />
            </label>
            <label htmlFor="description">
              <div>{t('description')}</div>
              <textarea
                id="description"
                name="description"
                placeholder="Enter a Description"
                required=""
                defaultValue="I love those Context"
              />
              <span className="input-focus-effect theme-bg" />
            </label>
            <label htmlFor="file">
              <div>{t('attachment')}</div>
              <input
                type="file"
                id="file"
                name="file"
                placeholder="Upload an attachment"
              />
            </label>
            <button type="submit">{t('submit')}</button>
          </fieldset>
        </Form>
      </div>
    </ContactStyle>
  );
};

Contact.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Contact);
