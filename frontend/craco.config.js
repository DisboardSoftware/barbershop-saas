module.exports = {
  eslint: {
    mode: 'file',
    configure: {
      plugins: ['react-hooks'],
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      }
    }
  }
};
