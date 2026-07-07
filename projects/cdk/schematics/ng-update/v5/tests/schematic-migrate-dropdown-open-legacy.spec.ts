import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update legacy tuiDropdownOpen', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
            import {TuiCalendar, TuiDropdown} from '@taiga-ui/core';

            @Component({
                templateUrl: './test.html',
                imports: [TuiCalendar, TuiDropdown],
            })
            export class TestComponent {}
        `,
    });

    it(
        'removes [tuiDropdownOpen] from an element without tuiDropdown',
        migrate({
            template: /* HTML */ `
                <tui-calendar
                    [tuiDropdownOpen]="false"
                    [value]="date"
                />
            `,
        }),
    );

    it(
        'removes static tuiDropdownOpen and [tuiDropdownOpenChange]',
        migrate({
            template: /* HTML */ `
                <tui-calendar
                    tuiDropdownOpen
                    [tuiDropdownOpenChange]="onChange"
                />
            `,
        }),
    );

    it(
        'keeps tuiDropdownOpen when paired with tuiDropdown',
        migrate({
            template: /* HTML */ `
                <tui-calendar
                    [tuiDropdown]="content"
                    [tuiDropdownOpen]="open"
                />
            `,
        }),
    );

    it(
        'keeps tuiDropdownOpen when paired with structural *tuiDropdown',
        migrate({
            template: /* HTML */ `
                <tui-calendar
                    *tuiDropdown
                    [tuiDropdownOpen]="open"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
