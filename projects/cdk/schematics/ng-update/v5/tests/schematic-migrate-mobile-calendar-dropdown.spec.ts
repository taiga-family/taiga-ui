import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update MobileCalendarDropdownNew', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames TuiMobileCalendarDropdownNew to TuiMobileCalendarDropdown',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiMobileCalendarDropdownNew} from '@taiga-ui/addon-mobile';

                @Component({
                    standalone: true,
                    imports: [TuiMobileCalendarDropdownNew],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-textfield>
                    <input tuiInputDate />
                </tui-textfield>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
