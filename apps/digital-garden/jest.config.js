/*
module.exports = {
  displayName: 'digital-garden',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/digital-garden',
  transformIgnorePatterns: [
    '/node_modules(?!/next-mdx-remote)/'
  ]

};
*/
const { getJestProjects } = require('@nrwl/jest');


/*module.exports = {
  projects: getJestProjects(),
};
*/
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'digital-garden',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/digital-garden',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = async (...args) => {
  const fn = createJestConfig(customJestConfig)
  const res = await fn(...args)

  res.transformIgnorePatterns = res.transformIgnorePatterns.map(pattern => {
    if (pattern === '/node_modules/') {
      return '/node_modules(?!/next-mdx-remote)/'
    }
    return pattern
  })

  return res
}
