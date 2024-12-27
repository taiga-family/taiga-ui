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
import { TuiTablePaginationModule, TuiTablePaginationComponent, TuiTablePagination } from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePaginationModule],
    template: \`
        <tui-table-pagination
            [page]="page"
            [size]="size"
            [total]="237"
            (paginationChange)="update($event)"
        ></tui-table-pagination>
    \`,
})
class Test {
    @ViewChild(TuiTablePaginationComponent, {static: true})
    component!: TuiTablePaginationComponent;

    public page = 3;
    public size = 10;

    protected update({page, size}: TuiTablePagination): void {
        this.page = page;
        this.size = size;
    }
}`;

const COMPONENT_AFTER = `
import { TuiTablePaginationEvent, TuiTablePagination } from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    template: \`
        <tui-table-pagination
            [page]="page"
            [size]="size"
            [total]="237"
            (paginationChange)="update($event)"
        ></tui-table-pagination>
    \`,
})
class Test {
    @ViewChild(TuiTablePagination, {static: true})
    component!: TuiTablePagination;

    public page = 3;
    public size = 10;

    protected update({page, size}: TuiTablePaginationEvent): void {
        this.page = page;
        this.size = size;
    }
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

    it('should migrate pagination references in ts files', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.component.ts').trim()).toEqual(
            COMPONENT_AFTER,
        );
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
