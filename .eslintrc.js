module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/airbnb'],
  rules: {
    quotes: ['error', 'single'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-nested-ternary': 0,
    'vuejs-accessibility/label-has-for': 0,
    'vuejs-accessibility/anchor-has-content': 0,
    'vue/component-tags-order': 0,
    'vue/no-template-shadow': 0,
    'no-restricted-exports': 0,
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': 0,
    'import/no-unresolved': 0,
    'import/no-named-as-default': 0,
    'no-unused-expressions': 0,
    'id-length': 0,
    'no-script-url': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'global-require': 0,
    'import/newline-after-import': 0,
    'import/extensions': 0,
    'prefer-template': 0,
    'max-len': 0,
    'function-paren-newline': 0,
    'react/no-typos': 0,
    'arrow-parens': 0,
    'linebreak-style': 0,
  },
};
