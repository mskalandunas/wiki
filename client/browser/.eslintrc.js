module.exports = {
  extends: [
    'eslint-config-standard'
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  parser: '@babel/eslint-parser',
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    'react/jsx-uses-react': 1,
    'react/prop-types': 0
  }
}
