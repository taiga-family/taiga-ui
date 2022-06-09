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

const collectionPath = join(__dirname, '../../migration.json');

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './app.template.html'})
export class AppComponent {}
`;

const TEMPLATE_BEFORE = `
<thead>
        <tr tuiThGroup>
            <th
                tuiResizableColumn
            >
                Name
            </th>
            <th tuiTh>Balance</th>
        </tr>
</thead>
<tui-editor new [formControl]="control"></tui-editor>
<tui-editor new [formControl]="control"></tui-editor>
<tui-group class="some_class">
    <div class="content"></div>
</tui-group>

<tui-wrapper
    [appearance]="appearance"
    [disabled]="computedDisabled"
    [focused]="computedFocusVisible"
    [hovered]="computedHovered"
    [pressed]="computedPressed"
    [invalid]="computedInvalid"
>any</tui-wrapper>

<div tuiWrapper
    [hovered]="computedHovered"
>any</div>
`;

const TEMPLATE_AFTER = `
<thead>
        <tr tuiThGroup>
            <th
                tuiTh [resizable]="true"
            >
                Name
            </th>
            <th tuiTh>Balance</th>
        </tr>
</thead>
<tui-editor [formControl]="control"></tui-editor>
<tui-editor [formControl]="control"></tui-editor>
<div tuiGroup class="some_class">
    <div class="content"></div>
</div>

<div tuiWrapper
    [appearance]="appearance"
    [disabled]="computedDisabled"
    [focused]="computedFocusVisible"
    [hover]="computedHovered"
    [active]="computedPressed"
    [invalid]="computedInvalid"
>any</div>

<div tuiWrapper
    [hover]="computedHovered"
>any</div>
`;

const COMPONENT_BEFORE = `
@Component({template: '<tui-group><div></div></tui-group>'})
export class AppComponent {
    aware = TUI_MOBILE_AWARE;
}
`;

const COMPONENT_AFTER = `
@Component({template: '<div tuiGroup><div></div></div>'})
export class AppComponent {
    aware = TUI_MOBILE_AWARE;
}
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

    it('should edit templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/app.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should edit inline templates', async () => {
        const tree = await runner.runSchematicAsync('updateToV3', {}, host).toPromise();

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/app.component.ts', COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test/app/app.template.html', TEMPLATE_BEFORE);

    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
}
