import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type expect as jestExpect} from '@jest/globals';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

import {TuiHostTree} from './host';

declare const expect: typeof jestExpect;

interface Input {
    collection: string;
    component?: string;
    template?: string;
    styles?: string;
    packageJson?: string;
    projectJson?: string;
    schematicName?: string;
}

interface Output {
    component: string;
    template: string;
    styles: string;
    packageJson: string;
    projectJson: string;
}

export async function runMigration(options: Input): Promise<Output> {
    const {
        collection,
        template = '',
        styles = '',
        packageJson = '{}',
        projectJson = '{}',
        schematicName = 'updateToV5',
        component = `
            import {Component} from '@angular/core';

            @Component({
                templateUrl: './test.html',
            })
            export class Test {}
        `,
    } = options;

    const host = new UnitTestTree(new TuiHostTree());
    const runner = new SchematicTestRunner('schematics', collection);

    setActiveProject(createProject(host));

    host.create('test/app/test.ts', component);
    host.create('test/app/test.html', template);
    host.create('test/app/test.less', styles);
    host.create('package.json', packageJson);
    host.create('project.json', projectJson);

    await runner.runSchematic(schematicName, {'skip-logs': true}, host);

    saveActiveProject();

    return {
        component: host.readContent('test/app/test.ts') ?? '',
        template: host.readContent('test/app/test.html') ?? '',
        styles: host.readContent('test/app/test.less') ?? '',
        packageJson: host.readContent('package.json') ?? '{}',
        projectJson: host.readContent('project.json') ?? '{}',
    };
}

type Overrides = Omit<Input, 'collection'>;

type MigrationTest = (overrides: Overrides) => () => Promise<void>;

export function createMigration(options: Input): MigrationTest {
    return function migrate(overrides: Overrides) {
        return async () => {
            const before = {...options, ...overrides};
            const after = await runMigration({...options, ...overrides});

            if (before.component && before.component !== after.component) {
                expect(
                    beforeAfterSnapshot(before.component, after.component),
                ).toMatchSnapshot('test.ts');
            }

            if (before.packageJson && before.packageJson !== after.packageJson) {
                expect(
                    beforeAfterSnapshot(before.packageJson, after.packageJson),
                ).toMatchSnapshot('package.json');
            }

            if (before.projectJson && before.projectJson !== after.projectJson) {
                expect(
                    beforeAfterSnapshot(before.projectJson, after.projectJson),
                ).toMatchSnapshot('project.json');
            }

            if (before.styles && before.styles !== after.styles) {
                expect(beforeAfterSnapshot(before.styles, after.styles)).toMatchSnapshot(
                    'test.less',
                );
            }

            if (before.template && before.template !== after.template) {
                expect(
                    beforeAfterSnapshot(before.template, after.template),
                ).toMatchSnapshot('test.html');
            }
        };
    };
}

function beforeAfterSnapshot(before: string, after: string): Record<string, string> {
    return {['0. Before']: before, ['1. After']: after};
}
