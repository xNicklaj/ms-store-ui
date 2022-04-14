const path = require('path');

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ['../src/components/**/*.stories.[tj]s[x]*'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  }
}
