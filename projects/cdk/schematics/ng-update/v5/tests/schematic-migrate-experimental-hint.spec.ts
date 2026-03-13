import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update experimental hint provider', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes tuiProvideExperimentalHint() from providers array and import',
        migrate({
            component: `
                import {ApplicationConfig} from '@angular/core';
                import {tuiProvideExperimentalHint} from '@taiga-ui/experimental';

                export const appConfig: ApplicationConfig = {
                    providers: [tuiProvideExperimentalHint()],
                };
            `,
        }),
    );

    it(
        'removes TUI_SLIDER_OPTIONS from providers array and import',
        migrate({
            component: `
                import {ApplicationConfig} from '@angular/core';
                import {TUI_SLIDER_OPTIONS} from '@taiga-ui/kit';

                export const appConfig: ApplicationConfig = {
                    providers: [TUI_SLIDER_OPTIONS],
                };
            `,
        }),
    );

    it(
        'removes tuiSliderOptionsProvider from providers array and import',
        migrate({
            component: `
                import {ApplicationConfig} from '@angular/core';
                import {tuiSliderOptionsProvider} from '@taiga-ui/kit';

                export const appConfig: ApplicationConfig = {
                    providers: [tuiSliderOptionsProvider({step: 2})],
                };
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
