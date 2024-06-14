import {join} from 'node:path';

import type {Tree} from '@angular-devkit/schematics';
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

const COMPONENT_BEFORE = `
import {TuiFocusableModule} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiFocusableModule]
})
export class TestComponent {
    focusable = true;
}`;

const COMPONENT_AFTER = `
@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: []
})
export class TestComponent {
    focusable = true;
}`;

describe('ng-migrate', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);
    });

    it('should migrate attribute assigned to property in template', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: '<div [tuiFocusable]="focusable"></div>',
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toBe(
            '<div [tabIndex]="focusable ? 0 : -1"></div>',
        );
    });

    it('should migrate attribute assigned to value "true" in template', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: '<div [tuiFocusable]="true"></div>',
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toBe(
            '<div [tabIndex]="0"></div>',
        );
    });

    it('should migrate attribute assigned to value "false" in template', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: '<div [tuiFocusable]="false"></div>',
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toBe(
            '<div [tabIndex]="-1"></div>',
        );
    });

    it('should migrate attribute assigned to logical expression in template', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: '<div [tuiFocusable]="!!(focusable$ | async)"></div>',
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toBe(
            '<div [tabIndex]="(!!(focusable$ | async)) ? 0 : -1"></div>',
        );
    });

    it('should migrate focusable references in ts files', async () => {
        initComponent({
            host,
            component: COMPONENT_BEFORE,
            template: '<div [tuiFocusable]="focusable"></div>',
        });

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toBe(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function initComponent({
    host,
    component,
    template,
}: {
    host: Tree;
    component: string;
    template: string;
}): void {
    setActiveProject(createProject(host));
    createSourceFile('test/app/test.component.ts', component);

    createSourceFile('test/app/test.template.html', template);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/cdk": "~3.59.0"}}',
    );
    saveActiveProject();
}
