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
            template: '<tui-notification size="m" status="info" />',
        });

        expect(template).toBe('<tui-notification size="m" appearance="info" />');
    });

    it('should migrate status => appearance ("[tuiNotification]" selector)', async () => {
        const {template} = await runMigration({
            component: COMPONENT_BEFORE,
            template: '<button tuiNotification [status]="status">Text</button>',
        });

        expect(template).toBe(
            '<button size="m" tuiNotification [appearance]="status">Text</button>',
        );
    });

    describe('keeps untouched "size" attribute (if it is already exists)', () => {
        ['size="l"', '[size]="computedSize"'].forEach((sizeAttr) => {
            it(`${sizeAttr}`, async () => {
                const {template} = await runMigration({
                    component: COMPONENT_BEFORE,
                    template: `<button tuiNotification ${sizeAttr}>Text</button>`,
                });

                expect(template).toBe(
                    `<button tuiNotification ${sizeAttr}>Text</button>`,
                );
            });
        });
    });

    it('adds close button inside if (close) listener exists', async () => {
        const {template, component} = await runMigration({
            component: COMPONENT_BEFORE,
            template:
                '<tui-notification [hideClose]="condition" (close)="anyHandler()">Text</tui-notification>',
        });

        expect(template).toBe(
            '<tui-notification size="m"  (close)="anyHandler()">Text <button *ngIf="!condition" tuiIconButton iconStart="@tui.x"></button></tui-notification>',
        );
        expect(component).toContain('import { NgIf } from "@angular/common";');
    });

    describe('wrap all content projection with <div> if it includes children >= 2', () => {
        it('text node + <a> tag', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template:
                    '<tui-notification size="l">Learn more in <a>documentation</a></tui-notification>',
            });

            expect(template).toBe(
                '<tui-notification size="l"><div>Learn more in <a>documentation</a></div></tui-notification>',
            );
        });

        it('self-closing tag <tui-notification />', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template: '<tui-notification />',
            });

            expect(template).toBe('<tui-notification size="m" />');
        });
    });

    describe('[hasIcon] migration', () => {
        it('button[tuiNotification]: [hasIcon]="false" => icon=""', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template: '<button tuiNotification [hasIcon]="false">Text</button>',
            });

            expect(template).toBe(
                '<button size="m" tuiNotification icon="">Text</button>',
            );
        });

        it('tui-notification: [hasIcon]="false" => icon=""', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template: '<tui-notification [hasIcon]="false">Text</tui-notification>',
            });

            expect(template).toBe(
                '<tui-notification size="m" icon="">Text</tui-notification>',
            );
        });

        it('button[tuiNotification]: [hasIcon]="true" => the whole attribute is removed', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template: '<button tuiNotification [hasIcon]="true">Text</button>',
            });

            expect(template).toBe('<button size="m" tuiNotification >Text</button>');
        });

        it('tui-notification: [hasIcon]="true" => the whole attribute is removed', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template: '<tui-notification [hasIcon]="true">Text</tui-notification>',
            });

            expect(template).toBe('<tui-notification size="m" >Text</tui-notification>');
        });

        it('[hasIcon]="complexCondition" => add todo comment', async () => {
            const {template} = await runMigration({
                component: COMPONENT_BEFORE,
                template:
                    '<tui-notification [hasIcon]="complexCondition">Text</tui-notification>',
            });

            expect(template).toBe(
                '<!-- TODO: (Taiga UI migration) "hasIcon" is deleted. Use icon="" to hide icon. Or pass TUI_NOTIFICATION_DEFAULT_OPTIONS["icon"] to show it again. Learn more: https://taiga-ui.dev/components/notification -->\n' +
                    '<tui-notification size="m" [hasIcon]="complexCondition">Text</tui-notification>',
            );
        });
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
