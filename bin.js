#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: '@relekang/eslint-config',
  packageInfo,
  prompts: [{ name: 'jest', type: 'confirm', message: 'Use jest?' }],
  createEslintConfig: config => {
    const eslintConfig = { extends: ['@relekang'] };
    if (config.babel) {
      eslintConfig.parser = 'babel-eslint';
    }
    if (config.typescript) {
      eslintConfig.parser = 'typescript-eslint-parser';
    }
    if (config.jest) {
      eslintConfig.extends.push('@relekang/eslint-config/jest');
    }
    if (config.flowtype) {
      eslintConfig.extends.push('@relekang/eslint-config/flowtype');
    }
    return eslintConfig;
  },
  createDependencyList: config => {
    const list = [
      'eslint',
      'eslint-plugin-prettier',
      'eslint-config-prettier',
      'prettier',
    ];
    if (config.babel) {
      list.push('babel-eslint');
    }
    if (config.typescript) {
      list.push('typescript-eslint-parser');
    }
    return list;
  },
});
