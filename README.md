# eslint-plugin-async-context-tc39
eslint plugin for async-context-tc39

## Install
```bash
npm install eslint-plugin-async-context-tc39 -D
```
## Purpose
The [async-context-tc39](https://www.npmjs.com/package/async-context-tc39) requires `await` expressions to be wrapped into Ѧ-functions (at least the ones that are on the path between where the context is set and where it is accessed). This plugin searches for the `await` expressions and fixes them if they are not wrapped.

## Usage
Sample `eslint.config.js`:
```js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import actc39 from 'eslint-plugin-async-context-tc39'; // <------

export default tseslint.config(
    { ignores: ['dist/'] },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    actc39.configs['flat/recommended'], // <------
);
```
or
```js
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import actc39  from 'eslint-plugin-async-context-tc39'

export default defineConfig([
  { files: ["src/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["src/*.{js,mjs,cjs}"], plugins: { actc39 }, rules: {"actc39/await-wrap": "error"} }, //<----
  { files: ["src/*.{js,mjs,cjs}"], languageOptions: { globals: { ...globals.browser, Ѧ: true } } },
]);
```