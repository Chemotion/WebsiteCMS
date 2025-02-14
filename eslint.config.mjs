import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import js from '@eslint/js';
// @ts-ignore
import babelParser from '@babel/eslint-parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends(''),

  {
    ignores: ['**/node_modules/**', '**/dist/**']
  },

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      },
      sourceType: 'module',
      ecmaVersion: 'latest',
      globals: {
        module: 'readonly',
        require: 'readonly',
        console: 'readonly',
        document: 'readonly'
      }
    },

    plugins: {
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y
    },

    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-boolean-value': ['warn', 'never'],

      'jsx-a11y/no-noninteractive-tabindex': 'warn',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-static-element-interactions': 'warn',
      'jsx-a11y/no-redundant-roles': 'warn',

      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      curly: ['warn', 'multi-line'],
      eqeqeq: ['warn', 'always']
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];

export default eslintConfig;
