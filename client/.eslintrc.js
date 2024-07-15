module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    // Remove 'plugin:react/recommended' from extends array
  ],
  plugins: [
    // Remove 'react' and 'react-hooks' from plugins array
  ],
  rules: {
    // Remove any specific rules you might have added
  },
};
