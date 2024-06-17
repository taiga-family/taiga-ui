import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import type {TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `
import { TuiCheckboxLabeledModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCheckboxLabeledModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiCheckboxComponent, TuiRadioComponent } from "@taiga-ui/kit";
import { TuiLabelComponent } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLabelComponent, TuiCheckboxComponent, TuiRadioComponent]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `

<tui-checkbox-labeled [(ngModel)]="value">
  Label
</tui-checkbox-labeled>

<tui-radio-labeled size="l" [formControl]="control" [item]="value" [identityMatcher]="matcher">
  Label
</tui-radio-labeled>
`;

const TEMPLATE_AFTER = `
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="value">
  Label
</label>

<label tuiLabel>
<input tuiRadio type="radio" size="m" [formControl]="control" [value]="value" [identityMatcher]="matcher">
  Label
</label>

`;

describe('ng-update', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate labeled in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate labeled references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);
}
