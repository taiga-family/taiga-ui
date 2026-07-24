import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update', () => {
    it(
        'migrate TuiInputCopyModule to TuiTextfield with tuiCopy',
        migrate({
            component: /* TypeScript */ `
                import {TuiInputCopyModule} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiInputCopyModule],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-input-copy [(ngModel)]="value">Click to copy</tui-input-copy>

                <tui-input-copy formControlName="token">Token</tui-input-copy>
            `,
        }),
    );

    it(
        'migrates a projected <input> inside tui-input-copy',
        migrate({
            template: /* HTML */ `
                <tui-input-copy [formControl]="control">
                    Copy me
                    <input
                        tuiTextfieldLegacy
                        placeholder="value"
                    />
                </tui-input-copy>
            `,
        }),
    );

    it(
        'moves static tuiTextfieldLabelOutside label to placeholder',
        migrate({
            template: /* HTML */ `
                <tui-input-copy
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Copy value
                </tui-input-copy>
            `,
        }),
    );

    it(
        'adds TODO for removed message inputs and drops them',
        migrate({
            template: /* HTML */ `
                <tui-input-copy
                    [(ngModel)]="value"
                    successMessage="Copied!"
                    [messageDirection]="direction"
                >
                    Copy value
                </tui-input-copy>
            `,
        }),
    );

    it(
        'migrate options tokens to kit',
        migrate({
            component: /* TypeScript */ `
                import {
                    TUI_INPUT_COPY_OPTIONS,
                    tuiInputCopyOptionsProvider,
                } from '@taiga-ui/legacy';
                import {type TuiInputCopyOptions} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    providers: [tuiInputCopyOptionsProvider({icon: '@tui.copy'})],
                    template: '',
                })
                export class MyComponent {
                    protected readonly options: TuiInputCopyOptions =
                        inject(TUI_INPUT_COPY_OPTIONS);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
