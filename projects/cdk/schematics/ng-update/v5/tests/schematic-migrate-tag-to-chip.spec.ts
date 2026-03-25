import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tag to chip', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates TuiTagModule and tuiTagOptionsProvider and updates template selectors',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiTagModule, tuiTagOptionsProvider} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiTagModule],
                    providers: [
                        tuiTagOptionsProvider({
                            size: 'l',
                        }),
                    ],
                    templateUrl: './test.html',
                })
                export class Example {}
            `,
            template: /* HTML */ `
                <tui-tag
                    removable
                    size="l"
                    status="primary"
                    value="Tag"
                />
                <button
                    size="l"
                    tuiTag
                    type="button"
                    value="Button"
                    class="tui-space_left-2"
                    [autoColor]="true"
                    [editable]="true"
                    [hoverable]="true"
                    [status]="status"
                ></button>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
