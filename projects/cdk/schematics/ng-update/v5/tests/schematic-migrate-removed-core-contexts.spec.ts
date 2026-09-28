import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed @taiga-ui/core context types (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed TuiValueContentContext and TuiAlertContext',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiAlertContext, TuiValueContentContext} from '@taiga-ui/core';
                import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

                @Component({})
                export class TestComponent {
                    protected content: PolymorpheusContent<
                        TuiValueContentContext<string>
                    >;
                    protected alert: TuiAlertContext<boolean>;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
