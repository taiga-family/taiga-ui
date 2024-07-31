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

const COMPONENT_BEFORE = `import {Component} from '@angular/core';
import {TuiNotificationModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiNotificationModule]
})
export class Test {}
`;

const COMPONENT_AFTER = `
import { TuiNotification } from "@taiga-ui/core";
import {Component} from '@angular/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiNotification]
})
export class Test {}
`.trimStart();

describe('ng-migrate', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);
    });

    it('should migrate TuiNotificationModule => TuiNotification import', async () => {
        const {component} = await runMigration({
            component: COMPONENT_BEFORE,
            template: '<tui-notification />',
        });

        expect(component).toBe(COMPONENT_AFTER);
    });

    it('should migrate status => appearance ("tui-notification" selector)', async () => {
        const {template} = await runMigration({
            component: COMPONENT_BEFORE,
            template: '<tui-notification status="info" />',
        });

        expect(template).toBe('<tui-notification appearance="info" />');
    });

    it('should migrate status => appearance ("[tuiNotification]" selector)', async () => {
        const {template} = await runMigration({
            component: COMPONENT_BEFORE,
            template: '<button tuiNotification [status]="status">Text</button>',
        });

        expect(template).toBe(
            '<button tuiNotification [appearance]="status">Text</button>',
        );
    });

    afterEach(() => {
        resetActiveProject();
    });

    async function runMigration({
        component,
        template,
    }: {
        component: string;
        template: string;
    }): Promise<{
        component: string;
        template: string;
    }> {
        setActiveProject(createProject(host));
        createSourceFile('test/app/test.component.ts', component);
        createSourceFile('test/app/test.template.html', template);

        createAngularJson();
        createSourceFile(
            'package.json',
            '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/cdk": "~3.59.0"}}',
        );
        saveActiveProject();

        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        return {
            component: tree.readContent('test/app/test.component.ts'),
            template: tree.readContent('test/app/test.template.html'),
        };
    }
});
