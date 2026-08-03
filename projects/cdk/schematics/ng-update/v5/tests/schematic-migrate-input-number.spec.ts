import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiInputNumberModule to TuiInputNumber',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputNumberModule} from '@taiga-ui/legacy';

                @NgModule({
                    imports: [
                        // ...
                        TuiInputNumberModule,
                    ],
                    // ...
                })
                export class MyModule {}

                @Component({
                    standalone: true,
                    imports: [
                        // ...
                        TuiInputNumberModule,
                    ],
                    templateUrl: './test.html',
                    // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <form [formGroup]="form">
                    <tui-input-number formControlName="value">
                        Enter a number
                    </tui-input-number>
                </form>

                <tui-input-number
                    class="b-form"
                    [max]="100"
                    [min]="0"
                    [step]="1"
                    [formControl]="control"
                >
                    Percentage
                </tui-input-number>

                <tui-input-number
                    formControlName="value"
                    tuiTextfieldPrefix="$"
                    tuiTextfieldPostfix=" per day"
                    tuiTextfieldSize="s"
                >
                    Balance
                </tui-input-number>

                <tui-input-number
                    formControlName="value"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Amount
                </tui-input-number>

                <tui-input-number [formControl]="control">
                    Enter a number
                    <input
                        placeholder="Enter a number"
                        tuiTextfield
                    />
                </tui-input-number>
            `,
        }),
    );

    it(
        'adds TODO comment for dynamic [tuiTextfieldLabelOutside]',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputNumberModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiInputNumberModule],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-number
                    formControlName="value"
                    [tuiTextfieldLabelOutside]="isLabelOutside"
                >
                    Amount
                </tui-input-number>
            `,
        }),
    );

    it(
        'leaves a self-closing tui-input-number untouched (no end tag to migrate into)',
        migrate({
            template: /* HTML */ `
                <tui-input-number formControlName="value">Amount</tui-input-number>
                <tui-input-number formControlName="other" />
            `,
        }),
    );

    it(
        'preserves camelCase for [formControlName] and (ngModelChange) bindings',
        migrate({
            template: /* HTML */ `
                <tui-input-number
                    [formControlName]="control"
                    (ngModelChange)="onChange($event)"
                >
                    Enter a number
                </tui-input-number>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
