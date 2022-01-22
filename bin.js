#!/usr/bin/env node
const { setup } = require('setup-eslint-config');

const packageInfo = require('./package.json');

setup({
  name: 'eslint-config-relekang',
  packageInfo,
  prompts: [
    { name: 'babel', type: 'confirm', message: 'Use babel?' },
    { name: 'typescript', type: 'confirm', message: 'Use typescript?' },
    { name: 'react', type: 'confirm', message: 'Use react?' },
    { name: 'jest', type: 'confirm', message: 'Use jest?' },
  ],
  skipDetectedPrompts: true,
  createEslintConfig: (config) => {
    const eslintConfig = { extends: ['relekang'] };
    if (config.babel) {
      eslintConfig.parser = '@babel/eslint-parser';
    }
    if (config.typescript) {
      eslintConfig.parser = '@typescript-eslint/parser';
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
  createDependencyList: (config) => {
    const list = [
      'eslint',
      'eslint-plugin-prettier',
      'eslint-config-prettier',
      'eslint-plugin-eslint-comments',
      'prettier',
    ];
    if (config.babel) {
      list.push('@babel/eslint-parser');
    }
    if (config.typescript) {
      list.push('@typescript-eslint/parser');
      list.push('@typescript-eslint/eslint-plugin');
    }
    if (config.react) {
      list.push('eslint-plugin-react');
      list.push('eslint-plugin-react-hooks');
    }
    return list;
  },
  createNpmCommands: ({ typescript }) => {
    return {
      lint: `eslint --cache ${typescript ? '--ext ts,tsx,js,jsx' : ''} .`,
      'lint:errors': `eslint --cache --quiet ${
        typescript ? '--ext ts,tsx,js,jsx' : ''
      } .`,
      format: `eslint --cache --quiet --fix ${
        typescript ? '--ext ts,tsx,js,jsx' : ''
      } .`,
    };
  },
});
