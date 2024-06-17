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
import { TuiActionModule } from "@taiga-ui/kit";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiActionModule]
})
export class Test {
}`;

const COMPONENT_AFTER = `import { TuiSurfaceDirective } from "@taiga-ui/core";
import { TuiCardLarge } from "@taiga-ui/layout";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiCardLarge, TuiSurfaceDirective]
})
export class Test {
}`;

const TEMPLATE_BEFORE = `
<button
    icon="tuiIconStarLarge"
    tuiAction
    type="button"
    class="action"
    (click)="onClick('Different')"
>
    And now for something completely different
</button>

<button
    tuiAction
    type="button"
    class="action"
>
    <section>
        <h3 class="header tui-text_body-s">Header</h3>
        <p class="description tui-text_body-xs">Description</p>
    </section>
    <tui-marker-icon
        size="xs"
        src="tuiIconStarLarge"
        class="tui-island__marker icon"
    ></tui-marker-icon>
</button>
`;

const TEMPLATE_AFTER = `
<!-- TODO: (Taiga UI migration) tuiAction has been removed in favour of tuiCardLarge + tuiSurface. Change the template according to this example https://taiga-ui.dev/layout/card-large -->
<button
    icon="tuiIconStarLarge"
    tuiCardLarge tuiSurface="elevated"
    type="button"
    class="action"
    (click)="onClick('Different')"
>
    And now for something completely different
</button>

<!-- TODO: (Taiga UI migration) tuiAction has been removed in favour of tuiCardLarge + tuiSurface. Change the template according to this example https://taiga-ui.dev/layout/card-large -->
<button
    tuiCardLarge tuiSurface="elevated"
    type="button"
    class="action"
>
    <section>
        <h3 class="header tui-text_body-s">Header</h3>
        <p class="description tui-text_body-xs">Description</p>
    </section>
    <tui-avatar${' '}
        size="xs"
        src="tuiIconStarLarge"
        class="tui-island__marker icon"
    ></tui-avatar>
</button>
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

    it('should migrate action in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate action references in ts files', async () => {
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
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
