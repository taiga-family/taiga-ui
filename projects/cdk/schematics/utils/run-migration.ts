import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

interface Input {
    collection: string;
    component?: string;
    template?: string;
    packageJson?: string;
    schematicName?: string;
}

interface Output {
    component: string;
    template?: string;
    packageJson?: string;
}

export async function runMigration(options: Input): Promise<Output> {
    const {
        collection,
        component = '',
        template = '',
        packageJson = '{}',
        schematicName = 'updateToV5',
    } = options;

    const host = new UnitTestTree(new HostTree());
    const runner = new SchematicTestRunner('schematics', collection);

    setActiveProject(createProject(host));

    host.create('test/app/test.ts', component);
    host.create('test/app/test.html', template);
    host.create('package.json', packageJson);

    await runner.runSchematic(schematicName, {'skip-logs': true}, host);

    saveActiveProject();

    return {
        component: host.readContent('test/app/test.ts'),
        template: host.readContent('test/app/test.html'),
        packageJson: host.readContent('package.json'),
    };
}
