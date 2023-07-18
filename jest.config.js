module.exports = {
    roots: ['<rootDir>/src'],
    collectCoveragefrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    testEviroment: 'node',
    transform:{
        '.+\\.ts$': 'ts-jest'
    }
};