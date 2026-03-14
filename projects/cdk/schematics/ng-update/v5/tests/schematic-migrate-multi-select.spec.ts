import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update legacy multi-select', () => {
    afterEach(() => resetActiveProject());

    it('migrates basic tui-multi-select with formControlName', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<tui-textfield multi tuiChevron');
        expect(template).toContain('</tui-textfield>');
        expect(template).toContain('<input tuiInputChip formControlName="items" />');
        expect(template).not.toContain('<tui-multi-select');
        expect(template).not.toContain('</tui-multi-select>');
    });

    it('migrates tui-multi-select with [(ngModel)]', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [(ngModel)]="value">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip [(ngModel)]="value" />');
        expect(template).not.toContain('<tui-textfield multi tuiChevron [(ngModel)]');
    });

    it('adds TODO comment before element', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-multi-select formControlName="items"></tui-multi-select>`,
        });

        expect(template).toContain('<!-- TODO: (Taiga UI migration)');
        expect(template).toContain('tui-multi-select was partially migrated');
    });

    it('adds multi and tuiChevron to tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-multi-select formControlName="items"></tui-multi-select>`,
        });

        expect(template).toContain('multi tuiChevron');
    });

    it('does not duplicate tuiChevron if already present', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-multi-select tuiChevron formControlName="items"></tui-multi-select>`,
        });

        const chevronCount = (template.match(/tuiChevron/g) ?? []).length;

        expect(chevronCount).toBe(1);
    });

    it('renames [valueContent] to [content]', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [valueContent]="tmpl" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('[content]="tmpl"');
        expect(template).not.toContain('[valueContent]');
    });

    it('renames valueContent to content (non-binding form)', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-multi-select valueContent="tmpl" formControlName="items"></tui-multi-select>`,
        });

        expect(template).toContain('content="tmpl"');
        expect(template).not.toContain('valueContent');
    });

    it('removes tuiTextfieldLabelOutside', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select
    formControlName="items"
    tuiTextfieldLabelOutside
>
</tui-multi-select>
`,
        });

        expect(template).not.toContain('tuiTextfieldLabelOutside');
    });

    it('removes [tuiTextfieldLabelOutside]', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select
    formControlName="items"
    [tuiTextfieldLabelOutside]="true"
>
</tui-multi-select>
`,
        });

        expect(template).not.toContain('tuiTextfieldLabelOutside');
    });

    it('removes [autoColor]', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select
    formControlName="items"
    [autoColor]="true"
>
</tui-multi-select>
`,
        });

        expect(template).not.toContain('autoColor');
    });

    it('moves placeholder to generated <input>', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select placeholder="Pick items" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip placeholder="Pick items"');
        expect(template).not.toContain('<tui-textfield multi tuiChevron placeholder');
    });

    it('moves [placeholder] binding to generated <input>', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [placeholder]="value.length ? '' : 'Pick'" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain(
            `<input tuiInputChip [placeholder]="value.length ? '' : 'Pick'"`,
        );
        expect(template).not.toContain('<tui-textfield multi tuiChevron [placeholder]');
    });

    it('keeps [stringify] on tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [stringify]="fn" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('<tui-textfield multi tuiChevron [stringify]="fn"');
    });

    it('keeps [rows] on tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [rows]="3" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('[rows]="3"');
        expect(template).toContain('<tui-textfield');
    });

    it('keeps tuiTextfieldSize on tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select tuiTextfieldSize="m" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('tuiTextfieldSize="m"');
        expect(template).toContain('<tui-textfield');
    });

    it('keeps [identityMatcher] on tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [identityMatcher]="matcher" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('[identityMatcher]="matcher"');
    });

    it('keeps [disabledItemHandler] on tui-textfield', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [disabledItemHandler]="handler" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('[disabledItemHandler]="handler"');
    });

    it('adds tuiSelectLike to <input> when [editable]="false"', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [editable]="false" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip tuiSelectLike');
        expect(template).not.toContain('editable');
    });

    it('does not add tuiSelectLike when [editable]="true"', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [editable]="true" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).not.toContain('tuiSelectLike');
        expect(template).not.toContain('editable');
    });

    it('adds [readOnly] to <input> when [editable] is a dynamic expression', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [editable]="isEditable" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('[readOnly]="!isEditable"');
        expect(template).not.toContain('[editable]');
    });

    it('migrates [tagValidator] to <tui-input-chip *tuiItem> with appearance binding', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [tagValidator]="isValid" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain(
            `<tui-input-chip *tuiItem="let ctx" [appearance]="isValid(ctx.item) ? '' : 'negative'" />`,
        );
        expect(template).not.toContain('[tagValidator]');
    });

    it('migrates (searchChange) to (input) on generated <input>', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select (searchChange)="onSearch($event)" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain(
            `(input)="onSearch(($event.target as HTMLInputElement).value)"`,
        );
        expect(template).toContain('<!-- TODO: (Taiga UI migration)');
        expect(template).toContain('Handler now receives string instead of string|null');
        expect(template).not.toContain('(searchChange)="');
    });

    it('adds TODO comment when [search] is present', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [search]="searchQuery" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<!-- TODO: (Taiga UI migration)');
        expect(template).toContain('[search] has no template-level v5 equivalent');
    });

    it('migrates full-featured tui-multi-select', async () => {
        const {template} = await runMigration({
            collection,
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
</tui-multi-select>
`,
        });

        expect(template).toContain('<tui-textfield multi tuiChevron');
        expect(template).toContain('[stringify]="stringify"');
        expect(template).toContain('[identityMatcher]="matcher"');
        expect(template).toContain('[rows]="3"');
        expect(template).toContain('[content]="tmpl"');
        expect(template).not.toContain('[valueContent]');
        expect(template).not.toContain('autoColor');
        expect(template).not.toContain('tuiTextfieldLabelOutside');
        expect(template).toContain(
            '<input tuiInputChip tuiSelectLike placeholder="Pick items" formControlName="items" />',
        );
        expect(template).toContain(
            `<tui-input-chip *tuiItem="let ctx" [appearance]="isValid(ctx.item) ? '' : 'negative'" />`,
        );
    });

    it('adds tuiInputChip to existing <input> inside', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select formControlName="items">
    <input placeholder="Type here" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip');
        expect(template).not.toContain('<input placeholder');
    });

    it('moves formControlName to existing <input>', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select formControlName="items">
    <input placeholder="Type here" />
</tui-multi-select>
`,
        });

        expect(template).toContain('formControlName="items"');
        expect(template).toContain('<input tuiInputChip formControlName="items"');
        expect(template).not.toContain('<tui-textfield multi tuiChevron formControlName');
    });

    it('does not add tuiInputChip to existing <input> if already present', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select formControlName="items">
    <input tuiInputChip placeholder="Type here" />
</tui-multi-select>
`,
        });

        const count = (template.match(/tuiInputChip/g) ?? []).length;

        expect(count).toBe(1);
    });

    it('removes plain autoColor attribute', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select
    formControlName="items"
    autoColor
>
</tui-multi-select>
`,
        });

        expect(template).not.toContain('autoColor');
    });

    it('adds tuiSelectLike to <input> when editable="false" (plain attribute)', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select editable="false" formControlName="items">
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip tuiSelectLike');
        expect(template).not.toContain('editable');
    });

    it('migrates [formControl] binding to generated <input>', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [formControl]="ctrl">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<input tuiInputChip [formControl]="ctrl" />');
        expect(template).not.toContain('<tui-textfield multi tuiChevron [formControl]');
    });

    it('adds TODO comment when [(search)] is present', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select [(search)]="searchQuery" formControlName="items">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).toContain('<!-- TODO: (Taiga UI migration)');
        expect(template).toContain('[search] has no template-level v5 equivalent');
    });

    it('migrates multiple tui-multi-select elements in one template', async () => {
        const {template} = await runMigration({
            collection,
            template: `
<tui-multi-select formControlName="first">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
<tui-multi-select formControlName="second">
    <tui-data-list-wrapper *tuiDataList [items]="items" />
</tui-multi-select>
`,
        });

        expect(template).not.toContain('<tui-multi-select');
        expect(template).not.toContain('</tui-multi-select>');

        const textfieldCount = (template.match(/<tui-textfield/g) ?? []).length;

        expect(textfieldCount).toBe(2);
        expect(template).toContain('formControlName="first"');
        expect(template).toContain('formControlName="second"');
    });
});
