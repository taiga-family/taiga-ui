import {defineConfig} from 'cypress';

import {TUI_CYPRESS_CONFIG} from './cypress.config';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    ...TUI_CYPRESS_CONFIG,
    env: {waitRenderedFont: `Manrope`},
    e2e: {
        ...TUI_CYPRESS_CONFIG.e2e,
        specPattern: [`cypress/tests/mobile/**/*.cy.ts`],
    },
    userAgent: `"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"`,
    viewportWidth: 390,
    viewportHeight: 844,
});
