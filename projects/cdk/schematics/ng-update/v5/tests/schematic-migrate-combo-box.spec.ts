import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update ComboBox', () => {
    it(
        'migrates TuiComboBoxModule import and basic tui-combo-box template',
        migrate({
            component: `
                import {TuiComboBoxModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiComboBoxModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: `
                <tui-combo-box [formControl]="control">
                    Many words label
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'migrates tui-combo-box with legacy textfield input',
        migrate({
            template: `
                <tui-combo-box [formControl]="control">
                    Label
                    <input
                        placeholder="Search..."
                        tuiTextfieldLegacy
                    />
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'moves [(ngModel)] to generated input when input is absent',
        migrate({
            template: `
<tui-combo-box [(ngModel)]="value">
    Choose an option
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-combo-box>
`,
        }),
    );

    it(
        'moves formControlName to generated input',
        migrate({
            template: `
                <tui-combo-box formControlName="myField">
                    Label
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'renames [strictMatcher] to [matcher]',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [strictMatcher]="myMatcher"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        'keeps [strict] on input',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [strict]="false"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        '[stringify] / [identityMatcher] / [disabledItemHandler]',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [stringify]="stringifyFn"
                    [identityMatcher]="matcherFn"
                    [disabledItemHandler]="disabledFn"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        '[valueContent] => tui-textfield[content]',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [valueContent]="myContent"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        'adds TODO for [search] and (searchChange)',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [search]="searchValue"
                    (searchChange)="onSearch($event)"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        'migrates *tuiDataList to *tuiDropdown',
        migrate({
            template: `
                <tui-combo-box [formControl]="control">
                    Label
                    <tui-data-list *tuiDataList>
                        <button tuiOption [value]="item">{{ item }}</button>
                    </tui-data-list>
                </tui-combo-box>
            `,
        }),
    );

    it(
        'handles multiple combo-boxes in the same template',
        migrate({
            template: `
                <tui-combo-box [formControl]="first">
                    First
                </tui-combo-box>

                <tui-combo-box [(ngModel)]="second">
                    Second
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'migrates combo-box with all properties combined',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [strictMatcher]="myMatcher"
                    [strict]="false"
                    [search]="search"
                    (searchChange)="search = $event"
                    [valueContent]="contentTpl"
                >
                    Choose a hero
                    <input
                        placeholder="Start typing..."
                        tuiTextfieldLegacy
                    />
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="heroes"
                        [itemContent]="contentTpl"
                    />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'removes TuiTextfieldControllerModule and drops [tuiTextfieldLabelOutside]',
        migrate({
            component: `
                import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

                @Component({
                  standalone: true,
                  imports: [TuiComboBoxModule, TuiTextfieldControllerModule],
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    it(
        'does not wrap text in label when [tuiTextfieldLabelOutside]="true"',
        migrate({
            template: `
                <tui-combo-box
                    [formControl]="control"
                    [tuiTextfieldLabelOutside]="true"
                >
                    City
                    <tui-data-list-wrapper *tuiDataList [items]="cities" />
                </tui-combo-box>
            `,
        }),
    );

    it(
        'moves tuiTextfieldSize to tui-textfield wrapper',
        migrate({
            template: `
                <tui-combo-box
                    tuiTextfieldSize="s"
                    [formControl]="control"
                >
                    Label
                </tui-combo-box>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
