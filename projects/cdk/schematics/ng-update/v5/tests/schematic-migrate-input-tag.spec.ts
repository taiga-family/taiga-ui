import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
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

    it(
        'moves [separator] and [uniqueTags] (→ [unique]) to <input tuiInputChip>',
        migrate({
            template: `
                <tui-input-tag
                    [separator]="separatorRegex"
                    [uniqueTags]="true"
                    formControlName="tags"
                >
                    Tags
                </tui-input-tag>`,
        }),
    );

    it(
        'moves placeholder to <input tuiInputChip>',
        migrate({
            template: `
                <tui-input-tag
                    placeholder="Add tag..."
                    formControlName="tags"
                >
                </tui-input-tag>`,
        }),
    );

    it(
        'adds TODO for [tagValidator] and [search]',
        migrate({
            template: `
                <tui-input-tag
                    [tagValidator]="myValidator"
                    [(search)]="searchValue"
                    formControlName="tags"
                >
                    Tags
                </tui-input-tag>`,
        }),
    );

    it(
        'silently removes [editable], [inputHidden], [autoColor], [removable]',
        migrate({
            template: `
                <tui-input-tag
                    formControlName="tags"
                    [editable]="false"
                    [inputHidden]="true"
                    [autoColor]="true"
                    [removable]="false"
                >
                    Tags
                </tui-input-tag>`,
        }),
    );

    it(
        'moves [rows] to <tui-textfield multi>',
        migrate({
            template: `
                <tui-input-tag
                    formControlName="tags"
                    [rows]="3"
                >
                    Tags
                </tui-input-tag>`,
        }),
    );

    it(
        'renames [maxLength] to [maxlength] on <input tuiInputChip>',
        migrate({
            template: `
                <tui-input-tag
                    formControlName="tags"
                    [maxLength]="50"
                >
                    Tags
                </tui-input-tag>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
