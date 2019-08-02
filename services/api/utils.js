const RTL_LANGS = ['fa'];

function isHome(pageName) {
  if (!pageName) return false;

  return pageName === '/';
}

function includeDefaultNamespaces(namespaces = '') {
  return ['common', '_error', 'nav'].concat(namespaces);
}

function isRTL(namespaces, lng) {
  if (!namespaces || !lng) return false;

  return namespaces.includes(lng);
}

function getAlign(namespaces, lng) {
  if (!namespaces || !lng) return 'left';

  return namespaces.includes(lng) ? 'right' : 'left';
}

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);

  if (response.status === 200) {
    return response.json();
  }

  throw new HttpError(response);
}

export {
  isHome,
  RTL_LANGS,
  includeDefaultNamespaces,
  isRTL,
  getAlign,
  fetchJson,
};
