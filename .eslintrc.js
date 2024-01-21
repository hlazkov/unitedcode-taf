// eslint-disable-next-line no-undef
module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:playwright/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    root: true,
    rules: {
        'no-duplicate-imports': ['error'],
        'no-unused-vars': 'off',
    },
    ignorePatterns: ['node_modules', 'dist', 'public'],
};
