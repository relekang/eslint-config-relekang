#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: 'eslint-config-relekang',
  packageInfo,
  prompts: [
    { name: 'react', type: 'confirm', message: 'Use react?' },
    { name: 'jest', type: 'confirm', message: 'Use jest?' },
  ],
  createEslintConfig: config => {
    const eslintConfig = { extends: ['relekang'] };
    if (config.babel) {
      eslintConfig.parser = 'babel-eslint';
    }
    if (config.typescript) {
      eslintConfig.parser = 'typescript-eslint-parser';
      eslintConfig.extends.push('relekang/configs/typescript');
    }
    if (config.jest) {
      eslintConfig.extends.push('relekang/configs/jest');
    }
    if (config.flowtype) {
      eslintConfig.extends.push('relekang/configs/flowtype');
    }
    if (config.react) {
      eslintConfig.extends.push('relekang/configs/react');
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
      list.push('eslint-plugin-typescript');
    }
    if (config.react) {
      list.push('eslint-plugin-react');
    }
    return list;
  },
});
