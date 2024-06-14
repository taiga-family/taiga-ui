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
import { TuiInteractiveState, TuiInteractiveStateT } from '@taiga-ui/core';

export class MyComponent {
    public getItemState(item: TuiDay): TuiInteractiveStateT | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return TuiInteractiveState.Disabled;
        }

        if (pressedItem?.daySame(item)) {
            return TuiInteractiveState.Active;
        }

        if (hoveredItem?.daySame(item)) {
            return TuiInteractiveState.Hover;
        }

        return null;
    }
}
`.trim();

const COMPONENT_AFTER = `
import { TuiInteractiveState } from '@taiga-ui/core';

export class MyComponent {
    public getItemState(item: TuiDay): TuiInteractiveState | null {
        const {disabledItemHandler, pressedItem, hoveredItem} = this;

        if (disabledItemHandler(item)) {
            return 'disabled';
        }

        if (pressedItem?.daySame(item)) {
            return 'active';
        }

        if (hoveredItem?.daySame(item)) {
            return 'hover';
        }

        return null;
    }
}
`.trim();

describe('ng-update enums', () => {
    let host: UnitTestTree;
    let runner: SchematicTestRunner;

    beforeEach(() => {
        host = new UnitTestTree(new HostTree());
        runner = new SchematicTestRunner('schematics', collectionPath);

        setActiveProject(createProject(host));

        createMainFiles();

        saveActiveProject();
    });

    it('migrate', async () => {
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
}
