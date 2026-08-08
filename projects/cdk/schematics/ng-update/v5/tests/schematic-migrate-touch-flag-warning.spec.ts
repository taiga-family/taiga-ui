import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update WA_IS_TOUCH signal warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment when TUI_IS_TOUCH is renamed to the WA_IS_TOUCH signal',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_IS_TOUCH} from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly touch = inject(TUI_IS_TOUCH);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
