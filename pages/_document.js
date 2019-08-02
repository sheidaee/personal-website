import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import lngFromReq from 'next-i18next/dist/commonjs/utils/lng-from-req';
import { RTL_LANGS } from '../services/api/utils';

export default class MyDocument extends Document {
  static getInitialProps(context) {
    // Document.getInitialProps(context);
    const lng = lngFromReq(context.req);
    const additionalProps = {
      isRTL: RTL_LANGS.some(currentLng => currentLng === lng),
      lng,
    };

    const sheet = new ServerStyleSheet();
    const page = context.renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, ...additionalProps };
  }

  render() {
    const { isRTL, lng } = this.props;
    return (
      <html lang={lng} dir={isRTL ? 'rtl' : 'ltr'}>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
