module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    // 添加 prettier 插件
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'off',
    semi: ['error', 'always'],
    'no-console': 'off',
    'quotes': ['warn', 'single'],
    'import/no-extraneous-dependencies': [2, {
      devDependencies: true,
      peerDependencies: true
    }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': 'off'

  },
  'settings': {
    'import/resolver': {
      'node': {
        'paths': ['src']
      }
    }
  }
};
