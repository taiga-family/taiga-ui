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
import {join} from 'path';

import {createAngularJson} from '../../../utils/create-angular-json';

const collectionPath = join(__dirname, '../../../migration.json');

const TUI_MATCHER_COMPONENT = `
import { TuiFilterPipe, TuiMatcher } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-matcher.component.html',
    imports: [TuiFilterPipe]
})
export class TestComponent {
    array = [1, 2, 3, 4, 5, 6, 7];
    matcher1: TuiMatcher<number[]> = (items, reminder) => items.filter(item => item % reminder);
    matcher2: TuiMatcher<string[]> = (items, length) => items.filter(item => item.length % length);
    matcher3: TuiMatcher<
        Array<() => string>,
    > = items.filter(item => item().length % length);
    matcher4: TuiMatcher<
      Array<() => string>,
    > = items.filter(item => item().length % length);
}`;

const TUI_MATCHER_COMPONENT_AFTER = `
import { TuiFilterPipe, TuiMatcher } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-matcher.component.html',
    imports: [TuiFilterPipe]
})
export class TestComponent {
    array = [1, 2, 3, 4, 5, 6, 7];
    matcher1: TuiMatcher<[number[], ...any]> = (items, reminder) => items.filter(item => item % reminder);
    matcher2: TuiMatcher<[string[], ...any]> = (items, length) => items.filter(item => item.length % length);
    matcher3: TuiMatcher<
        [Array<() => string>, ...any],
    > = items.filter(item => item().length % length);
    matcher4: TuiMatcher<
      [Array<() => string>, ...any],
    > = items.filter(item => item().length % length);
}`;

const TYPED_TUI_MATCHER_COMPONENT = `
import { TuiFilterPipe, TuiMatcher, TuiTypedMatcher } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-typed-matcher.component.html',
    imports: [TuiFilterPipe]
})
export class TestComponent {
    array = [1, 2, 3, 4, 5, 6, 7];
    matcher1: TuiTypedMatcher<[number[], number]> = (items, reminder) => items.filter(item => item % reminder);
    matcher2: TuiMatcher<string[]> = (items, length) => items.filter(item => item.length % length);
    matcher3: TuiTypedMatcher<[
        Array<() => string>,
        number
    ]> = items.filter(item => item().length % length);
    matcher4: TuiTypedMatcher<[
      Array<() => string>,
        number,
      ]> = items.filter(item => item().length % length);
}`;

const TYPED_TUI_MATCHER_COMPONENT_AFTER = `
import { TuiFilterPipe, TuiMatcher } from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './tui-typed-matcher.component.html',
    imports: [TuiFilterPipe]
})
export class TestComponent {
    array = [1, 2, 3, 4, 5, 6, 7];
    matcher1: TuiMatcher<[number[], number]> = (items, reminder) => items.filter(item => item % reminder);
    matcher2: TuiMatcher<[string[], ...any]> = (items, length) => items.filter(item => item.length % length);
    matcher3: TuiMatcher<[
        Array<() => string>,
        number
    ]> = items.filter(item => item().length % length);
    matcher4: TuiMatcher<[
      Array<() => string>,
        number,
      ]> = items.filter(item => item().length % length);
}`;

const TEMPLATE_BEFORE = `
<div>{{ array | tuiFilter: matcher: 2 }}</div>
`;

const TEMPLATE_AFTER = `
<div>{{ array | tuiFilter: matcher: 2 }}</div>
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

    it('should update TuiMatcher generic parameters', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV4',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        const componentBefore = tree.readContent('test/app/tui-matcher.component.ts');

        expect(componentBefore).toEqual(TUI_MATCHER_COMPONENT_AFTER);
        expect(tree.readContent('test/app/tui-matcher.component.html')).toEqual(
            TEMPLATE_AFTER,
        );
    });

    it('should rename TuiTypedMatcher', async () => {
        const tree = await runner
            .runSchematicAsync(
                'updateToV4',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            )
            .toPromise();

        expect(tree.readContent('test/app/tui-typed-matcher.component.ts')).toEqual(
            TYPED_TUI_MATCHER_COMPONENT_AFTER,
        );
        expect(tree.readContent('test/app/tui-typed-matcher.component.html')).toEqual(
            TEMPLATE_AFTER,
        );
    });

    afterEach(() => resetActiveProject());
});

function createMainFiles(): void {
    createSourceFile('test/app/tui-matcher.component.ts', TUI_MATCHER_COMPONENT);
    createSourceFile(
        'test/app/tui-typed-matcher.component.ts',
        TYPED_TUI_MATCHER_COMPONENT,
    );
    createSourceFile('test/app/tui-matcher.component.html', TEMPLATE_BEFORE);
    createSourceFile('test/app/tui-typed-matcher.component.html', TEMPLATE_BEFORE);

    createAngularJson();
    createSourceFile('package.json');
}
