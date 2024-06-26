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

const STYLES_BEFORE = `
:host {
    display: flex;
    align-items: center;
    justify-content: center;
    --tui-rating-size: 1.5rem;

    --tui-rating-gap: 0.5rem;
}
`;

const STYLES_AFTER = `
:host {
    display: flex;
    align-items: center;
    justify-content: center;
// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic
    --tui-rating-size: 1.5rem;

// TODO: (Taiga UI migration): use css to customize rating gap and size. See https://taiga-ui.dev/components/rating#basic
    --tui-rating-gap: 0.5rem;
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

    it('should migrate styles', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/styles.less')).toEqual(STYLES_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/styles.less', STYLES_BEFORE);
    createSourceFile('package.json', '{}');
}
