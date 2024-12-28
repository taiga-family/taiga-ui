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
import { TuiInputModule, TuiFieldErrorPipeModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [ TuiInputModule, TuiFieldErrorPipeModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiInputModule } from "@taiga-ui/legacy";

import { TuiFieldErrorPipe, TuiFieldErrorContentPipe } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [ TuiInputModule, TuiFieldErrorPipe, TuiFieldErrorContentPipe]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
 <tui-input
    id="hint-host"
    tuiHintDirection="top"
    class="host"
    [formControl]="control"
    [tuiHint]="[] | tuiFieldErrorContent"
>
    Tooltip host
</tui-input>
`;

const TEMPLATE_AFTER = `
 <tui-input
    id="hint-host"
    tuiHintDirection="top"
    class="host"
    [formControl]="control"
    [tuiHint]="[] | tuiFieldErrorContent"
>
    Tooltip host
</tui-input>
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

    it('should migrate error pipe in template', async () => {
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
