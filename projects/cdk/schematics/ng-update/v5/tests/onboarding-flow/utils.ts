import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

import type {TuiSchema} from '../../../../ng-add/schema';

const collectionPath = join(__dirname, '../../../../migration.json');

export async function runOnboardingMigration(
    tsContent: string,
    htmlContent: string,
): Promise<{ts: string; html: string}> {
    const host = new UnitTestTree(new HostTree());
    const runner = new SchematicTestRunner('schematics', collectionPath);

    host.create('test/app/example.component.ts', tsContent);
    host.create('test/app/example.component.html', htmlContent);

    setActiveProject(createProject(host, '/', ['**/*.ts', '**/*.html']));

    const tree = await runner.runSchematic(
        'updateToV5',
        {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
        host,
    );

    saveActiveProject();

    return {
        ts: tree.readContent('test/app/example.component.ts'),
        html: tree.readContent('test/app/example.component.html'),
    };
}
