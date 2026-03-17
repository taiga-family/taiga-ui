import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update legacy input', () => {
    it(
        'migrates TuiInputModule import and simple tui-input template',
        migrate({
            component: `
                import {TuiInputModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiInputModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: '<tui-input formControlName="value">Enter name</tui-input>',
        }),
    );

    it(
        'migrates tui-input wrapper attrs and routes them correctly',
        migrate({
            template: `
                <tui-input
                    formControlName="value"
                    tuiTextfieldSize="s"
                    [tuiTextfieldCleaner]="true"
                    tuiHintContent="Hint"
                >
                    Email
                </tui-input>`,
        }),
    );

    it(
        'wraps in <label tuiLabel> when [tuiTextfieldLabelOutside]="true"',
        migrate({
            template: `
                <tui-input
                    formControlName="value"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Email
                </tui-input>`,
        }),
    );

    it(
        'adds TODO for dynamic [tuiTextfieldLabelOutside] without wrapping',
        migrate({
            template:
                '<tui-input formControlName="value" [tuiTextfieldLabelOutside]="isOutside">Label</tui-input>',
        }),
    );

    it(
        'drops [tuiTextfieldLabelOutside]="false" without wrapping',
        migrate({
            template:
                '<tui-input formControlName="value" [tuiTextfieldLabelOutside]="false">Label</tui-input>',
        }),
    );

    it(
        'handles tui-input without text content',
        migrate({template: '<tui-input formControlName="value"></tui-input>'}),
    );

    it(
        'reuses inner <input tuiTextfieldLegacy> and preserves its attrs',
        migrate({
            template: `
                <tui-input formControlName="value">
                    Email
                    <input
                        autocomplete="email"
                        placeholder="[Email]"
                        tuiTextfieldLegacy
                        type="email"
                    />
                </tui-input>`,
        }),
    );

    it(
        'renames tuiTextfieldIconLeft to iconStart and tuiTextfieldIcon to iconEnd on wrapper',
        migrate({
            template: `
                <tui-input
                    formControlName="value"
                    [tuiTextfieldIconLeft]="iconStart"
                    [tuiTextfieldIcon]="iconEnd"
                >
                    Label
                </tui-input>`,
        }),
    );

    it(
        'renames tuiTextfieldCustomContent to content and tuiTextfieldFiller to filler',
        migrate({
            template:
                '<tui-input formControlName="value" [tuiTextfieldCustomContent]="myTpl" [tuiTextfieldFiller]="hint">Label</tui-input>',
        }),
    );

    it(
        'routes dropdown attrs to wrapper and adds TODO for prefix/postfix',
        migrate({
            template: `
                <tui-input
                    formControlName="value"
                    tuiDropdownDirection="top"
                    [tuiDropdownLimitWidth]="'fixed'"
                    tuiTextfieldPrefix="$"
                    tuiTextfieldPostfix="USD"
                >
                    Amount
                </tui-input>`,
        }),
    );

    it(
        'migrates multiple tui-input elements in one template',
        migrate({
            template: `
                <tui-input formControlName="a">First</tui-input>
                <tui-input formControlName="b">Second</tui-input>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
