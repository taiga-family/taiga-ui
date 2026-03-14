import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputColorModule to TuiInputColor',
        migrate({
            component: `
                import {TuiInputColorModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputColorModule],
                  templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: `
                <tui-input-color>
                </tui-input-color>

                <tui-input-color
                    [formControl]="control"
                    [tuiTextfieldCleaner]="true"
                >
                    Choose a color
                </tui-input-color>

                <tui-input-color
                    formControlName="color"
                >
                    Pick color
                </tui-input-color>

                <tui-input-color
                    [(ngModel)]="value"
                >
                    Color
                </tui-input-color>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
