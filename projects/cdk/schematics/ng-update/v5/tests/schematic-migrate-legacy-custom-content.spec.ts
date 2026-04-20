import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update legacy tuiTextfieldCustomContent across controls', () => {
    describe('binding form adds <tui-icon *polymorpheusOutlet>', () => {
        it(
            'tui-select',
            migrate({
                template:
                    '<tui-select formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-select>',
            }),
        );

        it(
            'tui-multi-select',
            migrate({
                template:
                    '<tui-multi-select formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-multi-select>',
            }),
        );

        it(
            'tui-combo-box',
            migrate({
                template:
                    '<tui-combo-box formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-combo-box>',
            }),
        );

        it(
            'tui-input-date',
            migrate({
                template:
                    '<tui-input-date formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-input-date>',
            }),
        );

        it(
            'tui-input-date-range',
            migrate({
                template:
                    '<tui-input-date-range formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-input-date-range>',
            }),
        );

        it(
            'tui-input-phone',
            migrate({
                template:
                    '<tui-input-phone formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-input-phone>',
            }),
        );

        it(
            'tui-input-tag',
            migrate({
                template:
                    '<tui-input-tag formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-input-tag>',
            }),
        );

        it(
            'tui-input-time',
            migrate({
                template:
                    '<tui-input-time formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-input-time>',
            }),
        );
    });

    describe('static string form adds <tui-icon icon="...">', () => {
        it(
            'tui-select',
            migrate({
                template:
                    '<tui-select formControlName="value" tuiTextfieldCustomContent="@tui.calendar">Label</tui-select>',
            }),
        );

        it(
            'tui-input-date',
            migrate({
                template:
                    '<tui-input-date formControlName="value" tuiTextfieldCustomContent="@tui.calendar">Label</tui-input-date>',
            }),
        );
    });

    describe('imports are registered', () => {
        it(
            'adds TuiIcon and PolymorpheusOutlet imports for tui-select binding',
            migrate({
                component: `
                    import {TuiSelectModule} from '@taiga-ui/legacy';

                    @Component({
                      standalone: true,
                      imports: [TuiSelectModule],
                      templateUrl: './test.html',
                    })
                    export class TestComponent {}
                `,
                template:
                    '<tui-select formControlName="value" [tuiTextfieldCustomContent]="myTpl">Label</tui-select>',
            }),
        );

        it(
            'adds only TuiIcon for tui-select static string',
            migrate({
                component: `
                    import {TuiSelectModule} from '@taiga-ui/legacy';

                    @Component({
                      standalone: true,
                      imports: [TuiSelectModule],
                      templateUrl: './test.html',
                    })
                    export class TestComponent {}
                `,
                template:
                    '<tui-select formControlName="value" tuiTextfieldCustomContent="@tui.calendar">Label</tui-select>',
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
