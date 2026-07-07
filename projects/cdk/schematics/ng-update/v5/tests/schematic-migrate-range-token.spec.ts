import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TUI_RANGE token', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'remove inject(TUI_RANGE) and adds the isPlatformBrowser with PLATFORM_ID',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {TUI_RANGE} from '@taiga-ui/cdk';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected range = inject(TUI_RANGE);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
