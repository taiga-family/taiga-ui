import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update legacy multi-select', () => {
    it(
        'migrates basic tui-multi-select with formControlName',
        migrate({
            template: /* HTML */ `
                <tui-multi-select formControlName="items">
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'migrates tui-multi-select with [(ngModel)]',
        migrate({
            template: /* HTML */ `
                <tui-multi-select [(ngModel)]="value">
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'migrates tui-multi-select with [formControl]',
        migrate({
            template: /* HTML */ `
                <tui-multi-select [formControl]="ctrl">
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'renames [valueContent] to [content]',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [valueContent]="tmpl"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'renames valueContent to content (non-binding form)',
        migrate({
            template:
                '<tui-multi-select valueContent="tmpl" formControlName="items"></tui-multi-select>',
        }),
    );

    it(
        'removes tuiTextfieldLabelOutside and [tuiTextfieldLabelOutside]',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    tuiTextfieldLabelOutside
                    [tuiTextfieldLabelOutside]="true"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'removes [autoColor] and plain autoColor',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    autoColor
                    formControlName="items"
                    [autoColor]="true"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'moves placeholder to generated <input>',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    placeholder="Pick items"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'moves [placeholder] binding to generated <input>',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [placeholder]="value.length ? '' : 'Pick'"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'keeps [stringify], [rows], [identityMatcher], [disabledItemHandler], tuiTextfieldSize on tui-textfield',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    tuiTextfieldSize="m"
                    [disabledItemHandler]="handler"
                    [identityMatcher]="matcher"
                    [rows]="3"
                    [stringify]="fn"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'adds tuiSelectLike to <input> when [editable]="false"',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [editable]="false"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'adds tuiSelectLike to <input> when editable="false" (plain attribute)',
        migrate({
            template:
                '<tui-multi-select editable="false" formControlName="items"></tui-multi-select>',
        }),
    );

    it(
        'does not add tuiSelectLike when [editable]="true"',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [editable]="true"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'adds [readOnly] to <input> when [editable] is a dynamic expression',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [editable]="isEditable"
                ></tui-multi-select>
            `,
        }),
    );

    it(
        'migrates [tagValidator] to <tui-input-chip *tuiItem> with appearance binding',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [tagValidator]="isValid"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'migrates (searchChange) to (input) on generated <input>',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    (searchChange)="onSearch($event)"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'adds TODO comment when [search] is present',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    [search]="searchQuery"
                >
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'adds tuiInputChip to existing <input> inside and moves formControlName',
        migrate({
            template: /* HTML */ `
                <tui-multi-select formControlName="items">
                    <input placeholder="Type here" />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'does not duplicate tuiInputChip if already present',
        migrate({
            template: /* HTML */ `
                <tui-multi-select formControlName="items">
                    <input
                        placeholder="Type here"
                        tuiInputChip
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'does not duplicate tuiChevron if already present',
        migrate({
            template:
                '<tui-multi-select tuiChevron formControlName="items"></tui-multi-select>',
        }),
    );

    it(
        'migrates full-featured tui-multi-select',
        migrate({
            template: /* HTML */ `
                <tui-multi-select
                    formControlName="items"
                    placeholder="Pick items"
                    tuiTextfieldLabelOutside
                    [autoColor]="true"
                    [editable]="false"
                    [identityMatcher]="matcher"
                    [rows]="3"
                    [stringify]="stringify"
                    [tagValidator]="isValid"
                    [valueContent]="tmpl"
                >
                    <label tuiLabel>Select</label>
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    it(
        'migrates multiple tui-multi-select elements in one template',
        migrate({
            template: /* HTML */ `
                <tui-multi-select formControlName="first">
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
                <tui-multi-select formControlName="second">
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    />
                </tui-multi-select>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
