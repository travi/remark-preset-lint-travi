exports.plugins = [
  require('remark-preset-lint-recommended'),
  [require('remark-lint-list-item-indent'), 'space'],
  require('remark-lint-no-tabs'),
  require('remark-lint-final-definition'),
  require('remark-validate-links')
];
