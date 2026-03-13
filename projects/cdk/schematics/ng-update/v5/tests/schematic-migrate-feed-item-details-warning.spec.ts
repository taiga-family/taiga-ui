import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiFeedItemDetailsComponent warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TuiFeedItemDetailsComponent import',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiFeedItemDetailsComponent} from '@taiga-ui/proprietary';

                @Component({})
                export class TestComponent {
                    protected readonly details = TuiFeedItemDetailsComponent;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
