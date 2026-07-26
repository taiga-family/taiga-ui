import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiHexToRgb warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for tuiHexToRgb import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiHexToRgb} from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly rgb = tuiHexToRgb('#fff');
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
