import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
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
import { CommonModule } from '@angular/common';
import { TuiSkeletonModule } from "@taiga-ui/experimental";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiSkeletonModule, CommonModule]
})
export class Test {
    readonly state$ = new BehaviorSubject('granted');
}`;

const COMPONENT_AFTER = `import { TuiSkeleton } from "@taiga-ui/kit";

import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiSkeleton, CommonModule]
})
export class Test {
    readonly state$ = new BehaviorSubject('granted');
}`;

const TEMPLATE_BEFORE = `
<p>
    <span
        [tuiSkeleton]="
            skeleton
                ? 'This text serves as the content behind the skeleton and depending on its length, the skeleton will adjust to fit it.'
                : ''
        "
    >
        {{ skeleton ? '' : 'This text will be replaced by a placeholder.' }}
    </span>
</p>
`;

const TEMPLATE_AFTER = `
<p>
    <span
        [tuiSkeleton]="
            skeleton
                ? 'This text serves as the content behind the skeleton and depending on its length, the skeleton will adjust to fit it.'
                : ''
        "
    >
        {{ skeleton ? '' : 'This text will be replaced by a placeholder.' }}
    </span>
</p>
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

    it('should migrate skeleton in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate skeleton references in ts files', async () => {
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

    createSourceFile('test/app/test.template.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/experimental": "~3.42.0", "@taiga-ui/kit": "~3.42.0"}}',
    );
}
