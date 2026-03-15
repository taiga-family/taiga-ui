import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update legacy input', () => {
    it('migrates TuiInputModule import and simple tui-input template', async () => {
        const {component, template} = await runMigration({
            collection,
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
        });

        expect(component).toContain('import { TuiInput } from "@taiga-ui/core";');
        expect(component).toContain('imports: [TuiInput]');
        expect(component).not.toContain('TuiInputModule');
        expect(template).toContain('<tui-textfield>');
        expect(template).toContain(
            '<input placeholder="Enter name" tuiInput formControlName="value" />',
        );
        expect(template).toContain('TODO: (Taiga UI migration) tui-input migration');
        expect(template).toContain('tuiLabel element inside');
    });

    it('migrates tui-input wrapper attrs and routes them correctly', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input
    formControlName="value"
    tuiTextfieldSize="s"
    [tuiTextfieldCleaner]="true"
    tuiHintContent="Hint"
>
    Email
</tui-input>`,
        });

        expect(template).toContain(
            '<tui-textfield tuiTextfieldSize="s" [tuiTextfieldCleaner]="true" tuiHintContent="Hint">',
        );
        expect(template).toContain('placeholder="Email"');
    });

    it('wraps in <label tuiLabel> when [tuiTextfieldLabelOutside]="true"', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input
    formControlName="value"
    [tuiTextfieldLabelOutside]="true"
>
    Email
</tui-input>`,
        });

        // Check actual HTML wrapping (not just text in TODO comment)
        expect(template).toContain('</label>');
        expect(template).toContain(
            '[tuiTextfieldLabelOutside]="true" was removed — wrapped in a tuiLabel element',
        );
        // The attribute must not appear as an HTML attribute (it may appear in TODO text)
        expect(template).not.toContain('<tui-input');
    });

    it('adds TODO for dynamic [tuiTextfieldLabelOutside] without wrapping', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="value" [tuiTextfieldLabelOutside]="isOutside">Label</tui-input>`,
        });

        // No actual label wrapping (closing tag won't appear in TODO comment text)
        expect(template).not.toContain('</label>');
        expect(template).toContain('is dynamic and cannot be migrated automatically');
    });

    it('drops [tuiTextfieldLabelOutside]="false" without wrapping', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="value" [tuiTextfieldLabelOutside]="false">Label</tui-input>`,
        });

        expect(template).not.toContain('</label>');
    });

    it('handles tui-input without text content', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="value"></tui-input>`,
        });

        expect(template).toContain('<input tuiInput formControlName="value" />');
        expect(template).not.toContain('placeholder');
    });

    it('reuses inner <input tuiTextfieldLegacy> and preserves its attrs', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="value">
    Email
    <input
        autocomplete="email"
        placeholder="[Email]"
        tuiTextfieldLegacy
        type="email"
    />
</tui-input>`,
        });

        expect(template).toContain('tuiInput');
        expect(template).not.toContain('tuiTextfieldLegacy');
        expect(template).toContain('formControlName="value"');
        expect(template).toContain('autocomplete="email"');
        expect(template).toContain('type="email"');
        expect(template.match(/<\/tui-textfield>/g)?.length).toBe(1);
        // Should NOT generate a duplicate input
        expect(template.match(/tuiInput/g)?.length).toBe(1);
    });

    it('renames tuiTextfieldIconLeft to iconStart and tuiTextfieldIcon to iconEnd on wrapper', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input
    formControlName="value"
    [tuiTextfieldIconLeft]="iconStart"
    [tuiTextfieldIcon]="iconEnd"
>
    Label
</tui-input>`,
        });

        expect(template).toContain(
            '<tui-textfield [iconStart]="iconStart" [iconEnd]="iconEnd">',
        );
        expect(template).not.toContain('tuiTextfieldIconLeft');
        expect(template).not.toContain('tuiTextfieldIcon');
    });

    it('renames tuiTextfieldCustomContent to content and tuiTextfieldFiller to filler', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="value" [tuiTextfieldCustomContent]="myTpl" [tuiTextfieldFiller]="hint">Label</tui-input>`,
        });

        expect(template).toContain('[content]="myTpl"');
        expect(template).toContain('[filler]="hint"');
        expect(template).not.toContain('tuiTextfieldCustomContent');
        expect(template).not.toContain('tuiTextfieldFiller');
    });

    it('routes dropdown attrs to wrapper and adds TODO for prefix/postfix', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input
    formControlName="value"
    tuiDropdownDirection="top"
    [tuiDropdownLimitWidth]="'fixed'"
    tuiTextfieldPrefix="$"
    tuiTextfieldPostfix="USD"
>
    Amount
</tui-input>`,
        });

        expect(template).toContain('tuiDropdownDirection="top"');
        expect(template).toContain('[tuiDropdownLimitWidth]="\'fixed\'"');
        expect(template).not.toContain('<input tuiDropdown');
        expect(template).toContain('tuiTextfieldPrefix');
        expect(template).toContain('has no direct equivalent in v5');
    });

    it('migrates multiple tui-input elements in one template', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-input formControlName="a">First</tui-input>
<tui-input formControlName="b">Second</tui-input>`,
        });

        expect(template).not.toContain('<tui-input');
        expect(template.match(/<\/tui-textfield>/g)?.length).toBe(2);
        expect(template).toContain('formControlName="a"');
        expect(template).toContain('formControlName="b"');
    });

    afterEach(() => resetActiveProject());
});
