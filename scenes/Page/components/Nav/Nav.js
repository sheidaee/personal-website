import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { siteUrl } from '../../../../config';
import { i18n, withNamespaces } from '../../../../services/api/localization';
import { NavStyle } from './NavStyles';

class Nav extends React.Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  render() {
    const { t } = this.props;

    return (
      <NavStyle className="nav">
        <div className="menuToggle">
          <button
            type="button"
            className="changeLang"
            onClick={() => {
              i18n.changeLanguage(i18n.language === 'en' ? 'fa' : 'en');
              window.location.reload();
            }}
          >
            {i18n.language === 'en' ? 'fa' : 'en'}
          </button>
          <input type="checkbox" className="phoneMenu" />
          <span className="phoneMenu" />
          <span className="phoneMenu" />
          <span className="phoneMenu" />
          <ul>
            <li>
              <Link href={siteUrl}>
                <a>{t('home')}</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>{t('about')}</a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a>{t('work')}</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>{t('blog')}</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>{t('contact')}</a>
              </Link>
            </li>
            <li>
              <Link href="/add_post">
                <a>add post</a>
              </Link>
            </li>
            <li>
              <Link href="/category/add_category">
                <a>add category</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href={siteUrl}>
          <a className="logo">SS</a>
        </Link>
      </NavStyle>
    );
  }
}

export default withNamespaces('nav')(Nav);
