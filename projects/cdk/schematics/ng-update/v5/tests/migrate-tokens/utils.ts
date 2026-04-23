import {join} from 'node:path';

import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    createSourceFile,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import {TuiHostTree} from '../../../../utils/host';

const collectionPath = join(__dirname, '../../../../migration.json');

export async function runMigration(before: string): Promise<string> {
    const host = new UnitTestTree(new TuiHostTree());
    const runner = new SchematicTestRunner('schematics', collectionPath);

    setActiveProject(createProject(host));
    createSourceFile('test/app/tokens.ts', before);
    createSourceFile('package.json', '{}');
    saveActiveProject();

    const tree = await runner.runSchematic(
        'updateToV5',
        {'skip-logs': process.env['TUI_CI'] === 'true'},
        host,
    );

    return tree.readContent('test/app/tokens.ts');
}
