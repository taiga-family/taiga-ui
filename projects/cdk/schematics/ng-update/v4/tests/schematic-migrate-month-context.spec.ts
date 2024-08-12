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
import { Component } from '@angular/core';
import { TuiMonth } from '@taiga-ui/cdk';
import { TuiBooleanHandlerWithContext, TuiInputMonthRangeModule, TuiMonthContext } from '@taiga-ui/kit';

@Component({
    standalone: true,
    template: '',
    imports: [TuiInputMonthRangeModule],
})
export class Test {
    readonly simpleHandler: TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> = ({month}) => month % 3 === 0;

    readonly disabledMonths: TuiBooleanHandlerWithContext<
        TuiMonth,
        TuiMonthContext
    > = ({ year, month }) => {
        const currentDate = new Date();

        return (
            year === currentDate.getFullYear() &&
            month <= currentDate.getMonth()
        );
    };
}`.trim();

const COMPONENT_AFTER = `
import { TuiInputMonthRangeModule } from "@taiga-ui/legacy";
import { Component } from '@angular/core';
import { TuiMonth, TuiBooleanHandler } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    imports: [TuiInputMonthRangeModule],
})
export class Test {
    readonly simpleHandler: TuiBooleanHandler<TuiMonth> = ({month}) => month % 3 === 0;

    readonly disabledMonths: TuiBooleanHandler<TuiMonth> = ({ year, month }) => {
        const currentDate = new Date();

        return (
            year === currentDate.getFullYear() &&
            month <= currentDate.getMonth()
        );
    };
}`.trim();

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

    it('should migrate TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext> in ts files', async () => {
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
    createSourceFile('package.json', '{}');
}
