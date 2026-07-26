import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TUI_ALERT_POSITION warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TUI_ALERT_POSITION import',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_ALERT_POSITION} from '@taiga-ui/core';

                @Component({})
                export class TestComponent {
                    protected readonly position = inject(TUI_ALERT_POSITION);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
