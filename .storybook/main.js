// .storybook/main.js
module.exports = {
  framework: '@storybook/react',
  stories: ['../src/stories'],
  addons: ['@storybook/preset-create-react-app', 'storybook-zeplin/register', '@storybook/addon-actions', '@storybook/addon-links'],
  core: {
    builder: 'webpack5'
  }
};