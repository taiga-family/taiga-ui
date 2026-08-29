import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TUI_DIALOGS removal warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment when TUI_DIALOGS is injected',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_DIALOGS} from '@taiga-ui/core';

                @Component({})
                export class TestComponent {
                    protected readonly dialogs = inject(TUI_DIALOGS);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
