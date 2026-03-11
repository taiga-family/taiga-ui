import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update legacy select', () => {
    it('migrates TuiSelectModule import and tui-select template', async () => {
        const {component, template} = await runMigration({
            collection,
            component: `
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [TuiSelectModule],
  templateUrl: './test.html',
})
export class TestComponent {}
            `,
            template: '<tui-select><input tuiTextfieldLegacy /></tui-select>',
        });

        expect(component).toContain('import { TuiSelect } from "@taiga-ui/kit";');
        expect(component).toContain('imports: [TuiSelect]');
        expect(component).not.toContain('TuiSelectModule');
        expect(template).toEqual(
            '<!-- TODO: (Taiga UI migration) tui-select was partially migrated. Complete migration manually. See examples: https://taiga-ui.dev/components/select -->\n<tui-textfield tuiChevron><input tuiSelect /></tui-textfield>',
        );
    });

    it('migrates complex tui-select template with legacy textfield input', async () => {
        const {template} = await runMigration({
            collection,
            template: `
	    <tui-select
        tuiTextfieldSize="s"
        [formControl]="testValue"
    >
        Character
        <input
            placeholder="Choose your hero"
            tuiTextfieldLegacy
        />
        <tui-data-list-wrapper
            *tuiDataList
            [items]="items"
        />
    </tui-select>
`,
        });

        expect(template).toEqual(`
	    <!-- TODO: (Taiga UI migration) tui-select was partially migrated. Complete migration manually. See examples: https://taiga-ui.dev/components/select -->
<tui-textfield tuiChevron
        tuiTextfieldSize="s"
        [formControl]="testValue"
    >
        Character
        <input
            placeholder="Choose your hero"
            tuiSelect
        />
        <tui-data-list-wrapper
            *tuiDropdown
            [items]="items"
        />
    </tui-textfield>
`);
    });

    it('renames valueContent to content, removes labelOutside and drops TuiTextfieldControllerModule', async () => {
        const {component, template} = await runMigration({
            collection,
            component: `
import {Component} from '@angular/core';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [TuiSelectModule, TuiTextfieldControllerModule],
  templateUrl: './test.html',
})
export class TestComponent {}
            `,
            template: `
	    <tui-select
        formControlName="testValue"
        [valueContent]="cardContent"
        [tuiTextfieldLabelOutside]="true"
    >
        Choose a card
        <tui-data-list-wrapper
            *tuiDataList
            [itemContent]="cardContent"
            [items]="cards"
        />
    </tui-select>
`,
        });

        expect(component).not.toContain('TuiTextfieldControllerModule');
        expect(template).toEqual(`
	    <!-- TODO: (Taiga UI migration) tui-select was partially migrated. Complete migration manually. See examples: https://taiga-ui.dev/components/select -->
<tui-textfield tuiChevron
        formControlName="testValue"
        [content]="cardContent"
    >
        Choose a card
        <tui-data-list-wrapper
            *tuiDropdown
            [itemContent]="cardContent"
            [items]="cards"
        />
    </tui-textfield>
`);
    });

    afterEach(() => resetActiveProject());
});
