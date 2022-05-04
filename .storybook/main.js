const path = require('path');

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ['../src/components/**/*.stories.[tj]s[x]*'],
  addons: [
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
}
