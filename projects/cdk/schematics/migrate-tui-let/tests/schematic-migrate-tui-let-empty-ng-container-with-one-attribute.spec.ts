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

import {createAngularJson} from '../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../collection.json');

const COMPONENT = `
import { TuiLet } from "@taiga-ui/cdk";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiLet],
})
export class Test {
    readonly value = 'foo';
}`;

const TEMPLATE = `
<ng-container *tuiLet="value as val">
</ng-container>

<div>
    <ng-container *tuiLet="value as val2">
    </ng-container>
</div>
`;

describe('migrateTuiLet', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('should migrate template', async () => {
        const tree = await runner.runSchematic(
            'migrateTuiLet',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toMatchSnapshot();
    });

    it('should migrate ts files', async () => {
        const tree = await runner.runSchematic(
            'migrateTuiLet',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toMatchSnapshot();
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT);

    createSourceFile('test/app/test.template.html', TEMPLATE);

    createAngularJson();
}
