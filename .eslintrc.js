module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'no-console': 'warn',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                semi: true,
                endOfLine: 'auto',
            },
        ],
        'react/jsx-sort-props': [
            'warn',
            {
                callbacksLast: true,
                shorthandFirst: true,
                reservedFirst: true,
                noSortAlphabetically: false,
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'sort-imports': [
            'warn',
            {
                ignoreCase: true,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
                allowSeparatedGroups: false,
            },
        ],
    },
};
