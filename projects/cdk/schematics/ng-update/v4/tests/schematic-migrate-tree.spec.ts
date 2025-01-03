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

const COMPONENT_BEFORE = `
import { TuiTreeModule, TuiTreeComponent,
        TuiTreeItemComponent,
        TuiTreeItemContentComponent,
        TuiTreeChildrenDirective,
        TuiTreeItemControllerDirective,
        TuiTreeControllerDirective,
        TuiTreeNodeDirective } from "@taiga-ui/kit";

@Component({
    standalone: true,
    template: '',
    imports: [TuiTreeModule]
})
export class Test {
 protected readonly list = [
        TuiTreeComponent,
        TuiTreeItemComponent,
        TuiTreeItemContentComponent,
        TuiTreeChildrenDirective,
        TuiTreeItemControllerDirective,
        TuiTreeControllerDirective,
        TuiTreeNodeDirective,
 ];
}`;

const COMPONENT_AFTER = `
import { TuiTreeComponent, TuiTreeControllerDirective, TuiTree, TuiTreeItem, TuiTreeItemContent, TuiTreeChildren, TuiTreeItemController, TuiTreeNode } from "@taiga-ui/kit";

@Component({
    standalone: true,
    template: '',
    imports: [TuiTree]
})
export class Test {
 protected readonly list = [
        TuiTreeComponent,
        TuiTreeItem,
        TuiTreeItemContent,
        TuiTreeChildren,
        TuiTreeItemController,
        TuiTreeControllerDirective,
        TuiTreeNode,
 ];
}`;

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

    it('should migrate tree references', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
