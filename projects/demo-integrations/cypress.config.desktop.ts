import {defineConfig} from 'cypress';

import {TUI_CYPRESS_CONFIG} from './cypress.config';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    ...TUI_CYPRESS_CONFIG,
    env: {waitRenderedFont: `Manrope`},
});
