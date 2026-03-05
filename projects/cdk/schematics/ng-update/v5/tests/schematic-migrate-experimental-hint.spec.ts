import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update experimental hint provider', () => {
    async function migrate(component: string): Promise<string> {
        const {component: result} = await runMigration({
            collection,
            component,
        });

        return result;
    }

    it('removes tuiProvideExperimentalHint() from providers array and import', async () => {
        const result = await migrate(`
            import {ApplicationConfig} from '@angular/core';
            import {tuiProvideExperimentalHint} from '@taiga-ui/experimental';

            export const appConfig: ApplicationConfig = {
                providers: [tuiProvideExperimentalHint()],
            };
        `);

        expect(result).toEqual(`
            import {ApplicationConfig} from '@angular/core';
            export const appConfig: ApplicationConfig = {
                providers: [],
            };
        `);
    });

    it('removes TUI_SLIDER_OPTIONS from providers array and import', async () => {
        const result = await migrate(`
            import {ApplicationConfig} from '@angular/core';
            import {TUI_SLIDER_OPTIONS} from '@taiga-ui/kit';

            export const appConfig: ApplicationConfig = {
                providers: [TUI_SLIDER_OPTIONS],
            };
        `);

        expect(result).toEqual(`
            import {ApplicationConfig} from '@angular/core';
// TODO: (Taiga UI migration) TUI_SLIDER_OPTIONS has been removed. Use CSS variables for slider configuration. See example https://taiga-ui.dev/components/slider
            export const appConfig: ApplicationConfig = {
                providers: [],
            };
        `);
    });

    afterEach(() => resetActiveProject());
});
