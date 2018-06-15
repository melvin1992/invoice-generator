module.exports = {
    "extends": "standard",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "js": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "eol-last": ["error", "always"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",
        "comma-dangle": "off",
        "no-trailing-spaces": "off",
    }
};