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

const BEFORE_LOCAL_STYLE = `
.a1 {
    color: var(--tui-text-01);
}

.a2 {
    color: var(--tui-text-02);
}
`;

const AFTER_LOCAL_STYLE = `
.a1 {
    color: var(--tui-text-primary);
}

.a2 {
    color: var(--tui-text-secondary);
}
`;

describe('replace css variables', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host, '/', '**/**'));

        createMainFiles();

        saveActiveProject();
    });

    it('should replace with new global styles', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/app.template.less')).toBe(AFTER_LOCAL_STYLE);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile(
        'test/app/app.component.ts',
        `
@Component({
    templateUrl: './app.template.html',
    styleUrls: ['./app.template.less']
})
export class AppComponent {
}
`,
    );

    createSourceFile('test/app/app.template.html', '<app></app>');
    createSourceFile('test/app/app.template.less', BEFORE_LOCAL_STYLE);

    createAngularJson();
    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
