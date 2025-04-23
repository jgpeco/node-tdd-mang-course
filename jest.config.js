/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  roots: ['<rootDir>/src']
}

module.exports = config
