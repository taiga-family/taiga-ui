import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed cdk utilities warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for the removed cdk utilities',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {EMPTY_QUERY, tuiFlatLength, tuiIsFalsy} from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly query = EMPTY_QUERY;
                    protected readonly falsy = tuiIsFalsy(0);
                    protected readonly length = tuiFlatLength([[1], [2, 3]]);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
