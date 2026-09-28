import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed cdk directives/utils warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TuiDroppable import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiDroppable} from '@taiga-ui/cdk';

                @Component({imports: [TuiDroppable]})
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for TuiAnimatedParent import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiAnimatedParent} from '@taiga-ui/cdk';

                @Component({imports: [TuiAnimatedParent]})
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comment for tuiValueBinding import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {tuiValueBinding} from '@taiga-ui/cdk';

                @Component({})
                export class TestComponent {
                    protected readonly value = tuiValueBinding();
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
