import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';

import {
    createProject,
    createSourceFile,
    resetActiveProject,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';
import {join} from 'path';
import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../migration.json');

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<tui-input
    tuiTextfieldSize="s"
    formControlName="testValue"
    tuiTextfieldExampleText="Test"
>
    Type an email
</tui-input>

<tui-text-area
    formControlName="testValue1"
    tuiHintContent="it's just a joke"
    [expandable]="true"
    [tuiTextfieldMaxLength]="maxLength"
    [tuiTextfieldLabelOutside]="true"
>
    Type it
</tui-text-area>

<tui-input-count
    formControlName="testValue1"
    tuiTextfieldAutocomplete="off"
    tuiTextfieldInputMode="numeric"
    [min]="1"
    [max]="200"
    [tuiTextfieldMaxLength]="maxLength"
>
    Count something
    <input
        tuiTextfield
        placeholder="1.. 2.. 3.."
    />
</tui-input-count>

<div
    polymorpheus-outlet
    [content]="content"
    [context]="context"
></div>
`;

const TEMPLATE_AFTER = `
<tui-input
    tuiTextfieldSize="s"
    formControlName="testValue"
    ${''}
>
    Type an email
<input tuiTextfield placeholder="Test"/> </tui-input>

<tui-text-area
    formControlName="testValue1"
    tuiHintContent="it's just a joke"
    [expandable]="true"
    [maxLength]="maxLength"
    [tuiTextfieldLabelOutside]="true"
>
    Type it
</tui-text-area>

<tui-input-count
    formControlName="testValue1"
    ${''}
    ${''}
    [min]="1"
    [max]="200"
    ${''}
>
    Count something
    <input
        tuiTextfield autocomplete="off" inputmode="numeric" [attr.maxlength]="maxLength"
        placeholder="1.. 2.. 3.."
    />
</tui-input-count>

<div
    ${''}
    ${''}
    ${''}
>
<ng-container *polymorpheusOutlet="content as text; context: context">
    {{ text }}
</ng-container></div>
`;

describe('ng-update (flat file structure)', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate textfields', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test.component.ts', COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
