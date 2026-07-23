import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-action-bar', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
            import {TuiActionBar} from '@taiga-ui/kit';

            @Component({
                templateUrl: './test.html',
                imports: [TuiActionBar],
            })
            export class TestComponent {}
        `,
    });

    it(
        'migrates *tuiActionBar to *tuiPopup',
        migrate({
            template: /* HTML */ `
                <tui-action-bar *tuiActionBar="open()">
                    <span>Action bar opened</span>
                </tui-action-bar>
            `,
        }),
    );

    it(
        'preserves other attributes on the element',
        migrate({
            template: /* HTML */ `
                <tui-action-bar
                    *tuiActionBar="open"
                    size="s"
                    [expanded]="expanded"
                >
                    <span>Action bar opened</span>
                </tui-action-bar>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
