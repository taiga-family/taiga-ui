import {EOL} from 'node:os';
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

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const COMPONENT_BEFORE = `\r\n
@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {}\r\n`;

const COMPONENT_AFTER = `${EOL}
@Component({
    standalone: true,
    templateUrl: './test.template.html',
})
export class Test {}${EOL}`;

const TEMPLATE_BEFORE = '\r\n<p>Hello</p>\r\n';

const TEMPLATE_AFTER = `${EOL}<p>Hello</p>${EOL}`;

const PACKAGE_BEFORE =
    '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}\r\n';

const PACKAGE_AFTER = `{
  "dependencies": {
    "@angular/core": "~13.0.0",
    "@taiga-ui/addon-commerce": "~3.42.0",
    "@taiga-ui/event-plugins": "^4.2.3"
  }
}${EOL}`;

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

    it('should be correct end of line', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
        expect(tree.readContent('package.json')).toEqual(PACKAGE_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createAngularJson();
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);
    createSourceFile('package.json', PACKAGE_BEFORE);
}
