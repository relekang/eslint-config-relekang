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
  useEslintRelativePathPatch: true,
  createEslintConfig: (config) => {
    const eslintConfig = { extends: ['relekang'] };
    if (config.babel) {
      eslintConfig.parser = '@babel/eslint-parser';
    }
    if (config.typescript) {
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
