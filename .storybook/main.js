// .storybook/main.js
module.exports = {
  framework: '@storybook/react',
  stories: ['../src/stories'],
  addons: ['@storybook/preset-create-react-app'],
  core: {
    builder: 'webpack5'
  }
};