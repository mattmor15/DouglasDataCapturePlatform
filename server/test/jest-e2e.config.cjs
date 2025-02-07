const path = require('path');

const { pathsToModuleNameMapper } = require('ts-jest');

const { compilerOptions } = require('../tsconfig');

/** @type {import('jest').Config} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: path.resolve(__dirname, '..')
  }),
  modulePaths: [compilerOptions.baseUrl],
  globalSetup: path.resolve(__dirname, 'jest-e2e.setup.cjs'),
  globalTeardown: path.resolve(__dirname, 'jest-e2e.teardown.cjs'),
  rootDir: __dirname,
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
};
