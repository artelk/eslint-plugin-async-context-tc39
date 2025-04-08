const { version, name } = require("./package.json")

const plugin = {
    meta: { version, name },
    rules: {
        "await-wrap": require("./eslint-plugin-await-wrap"),
    },
    configs: {},
};

Object.assign(plugin.configs, {
    recommended: {
        plugins: ['eslint-plugin-await-wrap'],
        rules: {
            'async-context-tc39/await-wrap': 'error',
        },
    },
    'flat/recommended': {
        plugins: { 'async-context-tc39': plugin },
        rules: {
            'async-context-tc39/await-wrap': 'error',
        },
    },
});

module.exports = plugin
//export const configs = plugin.configs
//export const rules = plugin.rules