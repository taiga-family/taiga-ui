import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiLegacyDropdownOpenMonitor removal', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes the import and its imports-array entry',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiLegacyDropdownOpenMonitorDirective} from '@taiga-ui/legacy';

                @Component({
                    template: '',
                    imports: [TuiLegacyDropdownOpenMonitorDirective],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'removes the tuiDropdownOpenMonitor attribute (tuiDropdownOpen becomes tuiDropdownAuto)',
        migrate({
            template: /* HTML */ `
                <button
                    tuiDropdown
                    tuiDropdownOpen
                    tuiDropdownOpenMonitor
                >
                    Menu
                </button>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
