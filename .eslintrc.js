module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "commonjs": true
    },
    "rules": {
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": "off",
        "no-unused-vars": ["error", { 
            "varsIgnorePattern": "(globalStyles|styles)", 
            "args": "none",
            "caughtErrors": "none"
        }]
    }
}
