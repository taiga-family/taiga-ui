import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputTagModule to TuiInputChip',
        migrate({
            component: `
                import {TuiInputTagModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputTagModule],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: `
                <tui-input-tag>
                </tui-input-tag>

                <tui-input-tag
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Enter tags
                </tui-input-tag>

                <tui-input-tag
                    formControlName="tags"
                >
                    My tags
                </tui-input-tag>

                <tui-input-tag
                    [(ngModel)]="value"
                >
                    Tags
                </tui-input-tag>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
