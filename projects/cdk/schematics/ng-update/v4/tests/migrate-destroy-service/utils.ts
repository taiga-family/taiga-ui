import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {
    createProject,
    createSourceFile,
    saveActiveProject,
    setActiveProject,
} from 'ng-morph';

import type {TuiSchema} from '../../../../ng-add/schema';

const collectionPath = join(__dirname, '../../../../migration.json');

export async function runMigration(before: string): Promise<string> {
    const host = new UnitTestTree(new HostTree());
    const runner = new SchematicTestRunner('schematics', collectionPath);

    setActiveProject(createProject(host));
    createSourceFile('test/app/test.component.ts', before);
    saveActiveProject();

    const tree = await runner.runSchematic(
        'updateToV4',
        {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
        host,
    );

    return tree.readContent('test/app/test.component.ts');
}
