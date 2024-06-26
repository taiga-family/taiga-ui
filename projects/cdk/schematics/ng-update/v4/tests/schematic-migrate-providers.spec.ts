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

const COMPONENT_BEFORE = `
import {tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    providers: [tuiInputNumberOptionsProvider({precision: 0, decimal: 'always', max: 3})],
})
export class Test {}`.trim();

const COMPONENT_AFTER = `
import { tuiInputNumberOptionsProvider } from "@taiga-ui/legacy";
@Component({
    standalone: true,
// TODO: (Taiga UI migration) "precision" and "decimal" options have been moved to FormatNumberOptions. See https://taiga-ui.dev/components/input-number#options
    providers: [tuiInputNumberOptionsProvider({max: 3})],
})
export class Test {}`.trim();

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

    it('should update input number options', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const componentBefore = tree.readContent('test/app/component.ts');

        expect(componentBefore).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/component.ts', COMPONENT_BEFORE);
    createSourceFile('package.json', '{}');
}
