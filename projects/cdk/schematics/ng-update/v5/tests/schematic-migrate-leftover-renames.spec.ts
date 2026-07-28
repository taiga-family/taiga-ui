import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update leftover renames (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames TuiAlert to TuiAlertDirective in core',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiAlert} from '@taiga-ui/core';

                @Component({imports: [TuiAlert]})
                export class TestComponent {}
            `,
        }),
    );

    it(
        'renames tuiInspectAny to tuiInspect in addon-doc',
        migrate({
            component: /* TypeScript */ `
                import {tuiInspectAny} from '@taiga-ui/addon-doc';

                export const label = tuiInspectAny({}, 1);
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
