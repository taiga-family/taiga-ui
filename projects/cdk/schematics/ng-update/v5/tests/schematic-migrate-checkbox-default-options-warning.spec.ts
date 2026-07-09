import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TUI_CHECKBOX_DEFAULT_OPTIONS warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TUI_CHECKBOX_DEFAULT_OPTIONS import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_CHECKBOX_DEFAULT_OPTIONS} from '@taiga-ui/kit';

                @Component({})
                export class TestComponent {
                    protected readonly defaults = TUI_CHECKBOX_DEFAULT_OPTIONS;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
