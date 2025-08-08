import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
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

const COMPONENT_AFTER = `import { TuiCheckbox, TuiRadio } from "@taiga-ui/kit";
import { TuiLabel } from "@taiga-ui/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLabel, TuiCheckbox, TuiRadio]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `<tui-checkbox-labeled [(ngModel)]="value">
  Label
</tui-checkbox-labeled>

<tui-checkbox-labeled *ngFor="let group of groups" [(ngModel)]="value">{{ group.name }}</tui-checkbox-labeled>

<tui-radio-labeled size="l" [formControl]="control" [item]="value" [identityMatcher]="matcher" [pseudoDisabled]="disabled">
  Label
</tui-radio-labeled>

<tui-checkbox-labeled
  *ngFor="let language of getLanguages()"
  [formControlName]="language.name"
  size="l"
  class="test"
  >{{ language.name }}</tui-checkbox-labeled
  >
`;

const TEMPLATE_AFTER = `<label tuiLabel><input tuiCheckbox type="checkbox" [(ngModel)]="value">
  Label
</label>
<label *ngFor="let group of groups" tuiLabel>
<input tuiCheckbox type="checkbox"  [(ngModel)]="value">{{ group.name }}</label>
<label tuiLabel>
<input tuiRadio type="radio" size="m" [formControl]="control" [value]="value" [identityMatcher]="matcher" [tuiAppearanceState]="disabled ? 'disabled' : null">
  Label
</label>
<label *ngFor="let language of getLanguages()" tuiLabel>
<input tuiCheckbox type="checkbox"
  ${''}
  [formControlName]="language.name"
  size="m"
  class="test"
  >{{ language.name }}</label>
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
    createSourceFile('package.json', '{}');
}
