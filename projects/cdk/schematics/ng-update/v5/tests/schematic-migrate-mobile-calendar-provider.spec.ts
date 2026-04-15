import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiProvideMobileCalendar warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO for tuiProvideMobileCalendar usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';

                @Component({
                    templateUrl: './test.html',
                    providers: [tuiProvideMobileCalendar()],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
