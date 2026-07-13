import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update arrow component', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO above TuiArrowComponent usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiArrowComponent} from '@taiga-ui/legacy';

                @Component({
                    templateUrl: './test.html',
                    imports: [TuiArrowComponent],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO above arrow options provider usage',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_ARROW, tuiArrowOptionsProvider} from '@taiga-ui/legacy';

                @Component({
                    templateUrl: './test.html',
                    providers: [tuiArrowOptionsProvider({iconLarge: TUI_ARROW})],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds comment above tui-arrow tag in template',
        migrate({
            template: /* HTML */ `
                <tui-arrow />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
