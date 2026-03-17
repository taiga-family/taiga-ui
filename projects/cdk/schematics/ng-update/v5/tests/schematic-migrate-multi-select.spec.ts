import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({
    collection: join(__dirname, '../../../migration.json'),
});

describe('ng-update legacy multi-select', () => {
    it(
        'migrates basic tui-multi-select with formControlName',
        migrate({
            template: `
                <tui-multi-select formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'migrates tui-multi-select with [(ngModel)]',
        migrate({
            template: `
                <tui-multi-select [(ngModel)]="value">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'migrates tui-multi-select with [formControl]',
        migrate({
            template: `
                <tui-multi-select [formControl]="ctrl">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'renames [valueContent] to [content]',
        migrate({
            template: `
                <tui-multi-select [valueContent]="tmpl" formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'renames valueContent to content (non-binding form)',
        migrate({
            template: `<tui-multi-select valueContent="tmpl" formControlName="items"></tui-multi-select>`,
        }),
    );

    it(
        'removes tuiTextfieldLabelOutside and [tuiTextfieldLabelOutside]',
        migrate({
            template: `
                <tui-multi-select
                    formControlName="items"
                    [tuiTextfieldLabelOutside]="true"
                    tuiTextfieldLabelOutside
                >
                </tui-multi-select>`,
        }),
    );

    it(
        'removes [autoColor] and plain autoColor',
        migrate({
            template: `
                <tui-multi-select
                    formControlName="items"
                    [autoColor]="true"
                    autoColor
                >
                </tui-multi-select>`,
        }),
    );

    it(
        'moves placeholder to generated <input>',
        migrate({
            template: `
                <tui-multi-select placeholder="Pick items" formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'moves [placeholder] binding to generated <input>',
        migrate({
            template: `
                <tui-multi-select [placeholder]="value.length ? '' : 'Pick'" formControlName="items">
                </tui-multi-select>`,
        }),
    );

    it(
        'keeps [stringify], [rows], [identityMatcher], [disabledItemHandler], tuiTextfieldSize on tui-textfield',
        migrate({
            template: `
                <tui-multi-select
                    [stringify]="fn"
                    [rows]="3"
                    [identityMatcher]="matcher"
                    [disabledItemHandler]="handler"
                    tuiTextfieldSize="m"
                    formControlName="items"
                >
                </tui-multi-select>`,
        }),
    );

    it(
        'adds tuiSelectLike to <input> when [editable]="false"',
        migrate({
            template: `
                <tui-multi-select [editable]="false" formControlName="items">
                </tui-multi-select>`,
        }),
    );

    it(
        'adds tuiSelectLike to <input> when editable="false" (plain attribute)',
        migrate({
            template: `<tui-multi-select editable="false" formControlName="items"></tui-multi-select>`,
        }),
    );

    it(
        'does not add tuiSelectLike when [editable]="true"',
        migrate({
            template: `
                <tui-multi-select [editable]="true" formControlName="items">
                </tui-multi-select>`,
        }),
    );

    it(
        'adds [readOnly] to <input> when [editable] is a dynamic expression',
        migrate({
            template: `
                <tui-multi-select [editable]="isEditable" formControlName="items">
                </tui-multi-select>`,
        }),
    );

    it(
        'migrates [tagValidator] to <tui-input-chip *tuiItem> with appearance binding',
        migrate({
            template: `
                <tui-multi-select [tagValidator]="isValid" formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'migrates (searchChange) to (input) on generated <input>',
        migrate({
            template: `
                <tui-multi-select (searchChange)="onSearch($event)" formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'adds TODO comment when [search] is present',
        migrate({
            template: `
                <tui-multi-select [search]="searchQuery" formControlName="items">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'adds tuiInputChip to existing <input> inside and moves formControlName',
        migrate({
            template: `
                <tui-multi-select formControlName="items">
                    <input placeholder="Type here" />
                </tui-multi-select>`,
        }),
    );

    it(
        'does not duplicate tuiInputChip if already present',
        migrate({
            template: `
                <tui-multi-select formControlName="items">
                    <input tuiInputChip placeholder="Type here" />
                </tui-multi-select>`,
        }),
    );

    it(
        'does not duplicate tuiChevron if already present',
        migrate({
            template: `<tui-multi-select tuiChevron formControlName="items"></tui-multi-select>`,
        }),
    );

    it(
        'migrates full-featured tui-multi-select',
        migrate({
            template: `
                <tui-multi-select
                    [stringify]="stringify"
                    [identityMatcher]="matcher"
                    [rows]="3"
                    [valueContent]="tmpl"
                    placeholder="Pick items"
                    [editable]="false"
                    [tagValidator]="isValid"
                    [autoColor]="true"
                    tuiTextfieldLabelOutside
                    formControlName="items"
                >
                    <label tuiLabel>Select</label>
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    it(
        'migrates multiple tui-multi-select elements in one template',
        migrate({
            template: `
                <tui-multi-select formControlName="first">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>
                <tui-multi-select formControlName="second">
                    <tui-data-list-wrapper *tuiDataList [items]="items" />
                </tui-multi-select>`,
        }),
    );

    afterEach(() => resetActiveProject());
});
