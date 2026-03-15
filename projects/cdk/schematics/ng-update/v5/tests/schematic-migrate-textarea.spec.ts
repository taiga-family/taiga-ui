import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update legacy textarea', () => {
    it('migrates TuiTextareaModule import and simple tui-textarea template', async () => {
        const {component, template} = await runMigration({
            collection,
            component: `
import {TuiTextareaModule} from '@taiga-ui/legacy';

@Component({
  standalone: true,
  imports: [TuiTextareaModule],
  templateUrl: './test.html',
})
export class TestComponent {}
            `,
            template:
                '<tui-textarea formControlName="testValue">Type a text</tui-textarea>',
        });

        expect(component).toContain('import { TuiTextarea } from "@taiga-ui/kit";');
        expect(component).toContain('imports: [TuiTextarea]');
        expect(component).not.toContain('TuiTextareaModule');
        expect(template).toContain('<tui-textfield>');
        expect(template).toContain(
            '<textarea placeholder="Type a text" tuiTextarea formControlName="testValue"></textarea>',
        );
        expect(template).toContain('TODO: (Taiga UI migration) tui-textarea migration');
        expect(template).toContain('label tuiLabel');
    });

    it('migrates tui-textarea attributes: wrapper attrs, [maxLength], drops labelOutside', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-textarea
    formControlName="testValue"
    tuiTextfieldSize="s"
    [maxLength]="150"
    [tuiTextfieldLabelOutside]="true"
>
    Label
</tui-textarea>`,
        });

        expect(template).toContain('<tui-textfield tuiTextfieldSize="s">');
        expect(template).toContain('placeholder="Label"');
        expect(template).toContain('[limit]="150"');
        expect(template).not.toContain('maxLength');
        expect(template).not.toContain('tuiTextfieldLabelOutside');
    });

    it('removes [expandable] and maps [rows] to [max]', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-textarea
    formControlName="testValue"
    [expandable]="true"
    [rows]="10"
>
    Type here
</tui-textarea>`,
        });

        expect(template).not.toContain('[expandable]=');
        expect(template).not.toContain('[rows]=');
        expect(template).toContain('[max]="10"');
        expect(template).toContain('[expandable] was removed');
        expect(template).toContain('[rows] was migrated to [max]="10"');
    });

    it('removes expandable="false" and maps static rows to max', async () => {
        const {template} = await runMigration({
            collection,
            template:
                '<tui-textarea formControlName="value" expandable="false" rows="5">Text</tui-textarea>',
        });

        expect(template).not.toContain('<textarea expandable');
        expect(template).toContain('max="5"');
        expect(template).toContain('expandable="false" was removed');
    });

    it('handles tui-textarea without text content', async () => {
        const {template} = await runMigration({
            collection,
            template: '<tui-textarea formControlName="value"></tui-textarea>',
        });

        expect(template).toContain(
            '<textarea tuiTextarea formControlName="value"></textarea>',
        );
        expect(template).not.toContain('placeholder');
    });

    it('reuses inner <textarea tuiTextfieldLegacy> instead of generating a new one', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-textarea [(ngModel)]="value">
    Bio
    <textarea
        maxlength="97"
        placeholder="Write a few words"
        tuiTextfieldLegacy
    ></textarea>
</tui-textarea>`,
        });

        expect(template).toContain('tuiTextarea');
        expect(template).not.toContain('tuiTextfieldLegacy');
        expect(template).toContain('[(ngModel)]="value"');
        expect(template).toContain('maxlength="97"');
        expect(template).toContain('placeholder="Write a few words"');
        // Should NOT generate a duplicate textarea (count closing tags to avoid matching TODO comment text)
        expect(template.match(/<\/textarea>/g)?.length).toBe(1);
    });

    it('keeps tuiTextfieldCleaner and tuiHintContent on tui-textfield wrapper', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-textarea
    formControlName="value"
    [tuiTextfieldCleaner]="true"
    tuiHintContent="Hint text"
    tuiHintDirection="bottom-right"
>
    Label
</tui-textarea>`,
        });

        expect(template).toContain(
            '<tui-textfield [tuiTextfieldCleaner]="true" tuiHintContent="Hint text" tuiHintDirection="bottom-right">',
        );
        expect(template).not.toContain('<textarea [tuiTextfieldCleaner]');
    });

    it('migrates multiple tui-textarea elements in one template', async () => {
        const {template} = await runMigration({
            collection,
            template: `<tui-textarea formControlName="a">First</tui-textarea>
<tui-textarea formControlName="b">Second</tui-textarea>`,
        });

        expect(template).not.toContain('<tui-textarea');
        expect(template.match(/<\/tui-textfield>/g)?.length).toBe(2);
        expect(template).toContain('formControlName="a"');
        expect(template).toContain('formControlName="b"');
    });

    afterEach(() => resetActiveProject());
});
