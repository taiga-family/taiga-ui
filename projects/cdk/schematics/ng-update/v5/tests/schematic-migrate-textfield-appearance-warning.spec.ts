import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TUI_TEXTFIELD_APPEARANCE warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TUI_TEXTFIELD_APPEARANCE import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_TEXTFIELD_APPEARANCE} from '@taiga-ui/legacy';

                @Component({
                    providers: [{provide: TUI_TEXTFIELD_APPEARANCE, useValue: 'table'}],
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
