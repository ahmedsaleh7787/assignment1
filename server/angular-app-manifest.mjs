
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ahmedsaleh7787.github.io/assignment1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/assignment1/home",
    "route": "/assignment1"
  },
  {
    "renderMode": 2,
    "route": "/assignment1/home"
  },
  {
    "renderMode": 2,
    "route": "/assignment1/about"
  },
  {
    "renderMode": 2,
    "route": "/assignment1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/assignment1/contact"
  },
  {
    "renderMode": 2,
    "route": "/assignment1/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5462, hash: 'b516b5fbb834068000ef7a53e356a1ab64eb5ffc97e565ffe87dda92352c975c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1104, hash: '41b1152bf2165e3f918687a6630ce96e3acf788a75f2fe280c312ccec0ae4ed9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 24066, hash: 'ae4882bd15fbbcfc36169fc790601abdbf541f934dfcedf7a3e93947b526b637', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19883, hash: '190bfdef447774b08ee5519b468f9779c05a364579caabcc5060bbccebe2bc53', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20676, hash: '82ba2ea71b634a6bd699b999c58cf4d5f0280d6bb418a5a9985b7c05f94caf4f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27801, hash: '4c0797271b6f75c6da7304ef00a8a1ac24075c2dac3dc6c46f8c6b0a520a9a13', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-3GXGBRTA.css': {size: 304851, hash: 'GIyDoo5J45o', text: () => import('./assets-chunks/styles-3GXGBRTA_css.mjs').then(m => m.default)}
  },
};
