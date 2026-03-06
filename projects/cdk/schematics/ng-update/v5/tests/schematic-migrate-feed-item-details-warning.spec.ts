import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update TuiFeedItemDetailsComponent warning', () => {
    async function migrate(component: string): Promise<string> {
        const {component: result} = await runMigration({
            component,
            collection,
        });

        return result;
    }

    it('adds TODO comment for TuiFeedItemDetailsComponent import', async () => {
        const result = await migrate(`
            import {Component} from '@angular/core';
            import {TuiFeedItemDetailsComponent} from '@taiga-ui/proprietary';

            @Component({})
            export class TestComponent {
                protected readonly details = TuiFeedItemDetailsComponent;
            }
        `);

        expect(result).toContain(
            '// TODO: (Taiga UI migration) TuiFeedItemDetailsComponent has been removed. Use BlockDetails instead. See https://taiga-ui.dev/layout/block-details',
        );
        expect(result).toContain(
            "import {TuiFeedItemDetailsComponent} from '@taiga-ui/proprietary';",
        );
    });

    afterEach(() => resetActiveProject());
});
