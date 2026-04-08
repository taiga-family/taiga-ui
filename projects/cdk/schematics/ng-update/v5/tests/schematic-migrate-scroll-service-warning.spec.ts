import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiScrollService warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TuiScrollService import',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiScrollService} from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    constructor(private readonly scrollService: TuiScrollService) {}
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
