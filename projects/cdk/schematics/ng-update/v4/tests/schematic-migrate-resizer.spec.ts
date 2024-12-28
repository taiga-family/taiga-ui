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
import { TuiResizerModule, TuiResizeableDirective } from "@taiga-ui/cdk";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiResizerModule]
})
export class Test {
    @ViewChild(TuiResizeableDirective, {static: true})
    private readonly resizable?: ElementRef<HTMLElement>;
}`;

const COMPONENT_AFTER = `
import { TuiResizable, TuiResizer } from "@taiga-ui/cdk";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiResizable, TuiResizer]
})
export class Test {
    @ViewChild(TuiResizable, {static: true})
    private readonly resizable?: ElementRef<HTMLElement>;
}`;

const TEMPLATE_BEFORE = `
<div tuiResizeable>
  <div [tuiResizer]="[1, 0]"></div>
</div>
`;

const TEMPLATE_AFTER = `
<div tuiResizable>
  <div [tuiResizer]="[1, 0]"></div>
</div>
`;

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

    it('should migrate resizable references', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
        expect(tree.readContent('test/app/test.component.ts')).toEqual(COMPONENT_AFTER);
    });

    afterEach(() => {
        resetActiveProject();
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);
    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
