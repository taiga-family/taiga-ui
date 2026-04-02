import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-loader', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {TuiLoader} from '@taiga-ui/core';

            @Component({
                templateUrl: './test.html',
                imports: [TuiLoader],
            })
            export class TestComponent {}
        `,
    });

    it(
        'migrates showLoader to [loading]',
        migrate({
            template: /* HTML */ `
                <tui-loader
                    [overlay]="true"
                    [showLoader]="loading"
                ></tui-loader>
                <tui-loader showLoader="true"></tui-loader>
                <tui-loader [showLoader]="true"></tui-loader>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
