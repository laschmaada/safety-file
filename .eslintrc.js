module.exports = {
  extends: ['react-app'],
  plugins: [
    // Remove jsx-a11y temporarily
  ],
  rules: {
    // Disable rules that might be causing issues
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/alt-text': 'off',
  }
};