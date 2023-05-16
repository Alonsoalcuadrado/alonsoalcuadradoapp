module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: [
    'react',
    'import',
    'jsx-a11y',
    'react-hooks',
    'prettier',
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // No es necesario importar React en Vite con React 17+
    'react/prop-types': 'off', // Deshabilita las advertencias de prop-types si no las estás usando
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }], // Permite archivos .js y .jsx
    'react/jsx-props-no-spreading': 'off', // Deshabilita la regla de no propagación de props
    'no-unused-vars': 'warn', // Muestra solo advertencias para las variables no utilizadas
  },
};
