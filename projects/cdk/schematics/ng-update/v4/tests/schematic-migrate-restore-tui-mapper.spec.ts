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

const TUI_MAPPER_COMPONENT = `
import { TuiMapper, TuiMapperPipeModule } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-mapper.component.html',
    imports: [TuiMapperPipeModule]
})
export class TestComponent {
    mapper1: TuiMapper<number, string> = (a, b) => \`\${a + b}\`;
    mapper2: TuiMapper<string, string> = (a, b) => \`\${a + b}\`;
    mapper3: TuiMapper<
        () => string,
        string
    > = (a, b) => \`\${a() + b}\`;
    mapper4: TuiMapper<
      () => string,
        string> = (a, b) => \`\${a() + b}\`;
}`;

const TUI_MAPPER_COMPONENT_AFTER = `
import { TuiMapper, TuiMapperPipe } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-mapper.component.html',
    imports: [TuiMapperPipe]
})
export class TestComponent {
    mapper1: TuiMapper<[number, ...any], string> = (a, b) => \`\${a + b}\`;
    mapper2: TuiMapper<[string, ...any], string> = (a, b) => \`\${a + b}\`;
    mapper3: TuiMapper<
        [() => string, ...any],
        string
    > = (a, b) => \`\${a() + b}\`;
    mapper4: TuiMapper<
      [() => string, ...any],
        string> = (a, b) => \`\${a() + b}\`;
}`;

const TYPED_TUI_MAPPER_COMPONENT = `
import {TuiMapper, TuiTypedMapper, TuiMapperPipeModule} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-typed-mapper.component.html',
    imports: [TuiMapperPipeModule]
})
export class TestComponent {
    mapper1: TuiTypedMapper<[number, number], string> = (a, b) => \`\${a + b}\`;
    mapper2: TuiMapper<number, string> = (a, b) => \`\${a + b}\`;
    mapper3: TuiTypedMapper<[() => string, number], string> = (a, b) => \`\${a() + b}\`;
    mapper4: TuiTypedMapper<
        [() => string, number],
        string
    > = (a, b) => \`\${a() + b}\`;
    mapper5: TuiTypedMapper<
      [() => string, number],
        string
    > = (a, b) => \`\${a() + b}\`;
}`;

const TYPED_TUI_MAPPER_COMPONENT_AFTER = `
import { TuiMapper, TuiMapperPipe } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-typed-mapper.component.html',
    imports: [TuiMapperPipe]
})
export class TestComponent {
    mapper1: TuiMapper<[number, number], string> = (a, b) => \`\${a + b}\`;
    mapper2: TuiMapper<[number, ...any], string> = (a, b) => \`\${a + b}\`;
    mapper3: TuiMapper<[() => string, number], string> = (a, b) => \`\${a() + b}\`;
    mapper4: TuiMapper<
        [() => string, number],
        string
    > = (a, b) => \`\${a() + b}\`;
    mapper5: TuiMapper<
      [() => string, number],
        string
    > = (a, b) => \`\${a() + b}\`;
}`;

const TEMPLATE_BEFORE = `
<div>{{ 1 | mapper: 2 }}</div>
`;

const TEMPLATE_AFTER = `
<div>{{ 1 | mapper: 2 }}</div>
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

    it('should update TuiMapper generic parameters', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        const componentBefore = tree.readContent('test/app/tui-mapper.component.ts');

        expect(componentBefore).toEqual(TUI_MAPPER_COMPONENT_AFTER);
        expect(tree.readContent('test/app/tui-mapper.component.html')).toEqual(
            TEMPLATE_AFTER,
        );
    });

    it('should rename TuiTypedMapper and remove unused imports', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/tui-typed-mapper.component.ts')).toEqual(
            TYPED_TUI_MAPPER_COMPONENT_AFTER,
        );
        expect(tree.readContent('test/app/tui-typed-mapper.component.html')).toEqual(
            TEMPLATE_AFTER,
        );
    });

    afterEach(() => resetActiveProject());
});

function createMainFiles(): void {
    createSourceFile('test/app/tui-mapper.component.ts', TUI_MAPPER_COMPONENT);
    createSourceFile(
        'test/app/tui-typed-mapper.component.ts',
        TYPED_TUI_MAPPER_COMPONENT,
    );
    createSourceFile('test/app/tui-mapper.component.html', TEMPLATE_BEFORE);
    createSourceFile('test/app/tui-typed-mapper.component.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile('package.json');
}
