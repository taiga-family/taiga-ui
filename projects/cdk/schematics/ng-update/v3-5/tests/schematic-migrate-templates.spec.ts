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
import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_WITH_TEMPLATE_URL = `
@Component({templateUrl: './test.template.html'})
export class TestComponent {}
`;

const TEMPLATE_BEFORE = `
<tui-expand>
    <ng-template>
        content
    </ng-template>
</tui-expand>

<tui-expand>
    <ng-template tuiExpandContent>
        content
    </ng-template>
</tui-expand>

<tui-expand>
    <div>eager content</div>
</tui-expand>
`;

const TEMPLATE_AFTER = `
<tui-expand>
    <ng-template tuiExpandContent>
        content
    </ng-template>
</tui-expand>

<tui-expand>
    <ng-template tuiExpandContent>
        content
    </ng-template>
</tui-expand>

<tui-expand>
    <div>eager content</div>
</tui-expand>
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
        const tree = await runner.runSchematicAsync('updateToV3_5', {}, host).toPromise();

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_WITH_TEMPLATE_URL);

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
