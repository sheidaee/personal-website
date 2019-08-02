import Head from 'next/head';
import PropTypes from 'prop-types';
import { isRTL, RTL_LANGS } from '../../../services/api/utils';

const Meta = ({ initLng }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link
      rel="stylesheet"
      type="text/css"
      href="/static/styles/nprogress.css"
    />
    {isRTL(RTL_LANGS, initLng) ? (
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/styles/style_fa.css"
      />
    ) : (
      <link
        rel="stylesheet"
        type="text/css"
        href="/static/styles/style_en.css"
      />
    )}
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
    />
    <title>Shahin Sheidaei | Web Developer</title>
  </Head>
);

Meta.propTypes = {
  initLng: PropTypes.string.isRequired,
};

export default Meta;
