import {defineConfig} from 'cypress';

import {TUI_CYPRESS_CONFIG, TUI_CYPRESS_ENV} from './cypress.config';

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
    ...TUI_CYPRESS_CONFIG,
    env: TUI_CYPRESS_ENV,
});
