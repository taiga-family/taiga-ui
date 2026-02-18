import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {createProject, saveActiveProject, setActiveProject} from 'ng-morph';

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
        component = '',
        template = '',
        styles = '',
        packageJson = '{}',
        projectJson = '{}',
        schematicName = 'updateToV5',
    } = options;

    const host = new UnitTestTree(new HostTree());
    const runner = new SchematicTestRunner('schematics', collection);

    setActiveProject(createProject(host));

    host.create('test/app/test.ts', component);
    host.create('test/app/test.html', template);
    host.create('test/app/test.style.less', styles);
    host.create('package.json', packageJson);
    host.create('project.json', projectJson);

    await runner.runSchematic(schematicName, {'skip-logs': true}, host);

    saveActiveProject();

    return {
        component: host.readContent('test/app/test.ts') ?? '',
        template: host.readContent('test/app/test.html') ?? '',
        styles: host.readContent('test/app/test.style.less') ?? '',
        packageJson: host.readContent('package.json') ?? '{}',
        projectJson: host.readContent('project.json') ?? '{}',
    };
}
