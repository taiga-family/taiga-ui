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
import {TuiBrightness, TuiModeModule, TuiRootModule, TuiThemeNightModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiModeModule, TuiRootModule, TuiThemeNightModule]
})
export class Test {
  get mode(): TuiBrightness | null {
        return this.night$.value ? 'onDark' : null;
    }
}`;

const COMPONENT_AFTER = `
import { TuiRoot } from '@taiga-ui/core';

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    imports: [TuiRoot]
})
export class Test {
  get mode(): 'onDark' | 'onLight' | null {
        return this.night$.value ? 'onDark' : null;
    }
}`;

const TEMPLATE_BEFORE = `
<tui-theme-night *ngIf="night$ | async"></tui-theme-night>

<tui-root [tuiMode]="mode">
    <cd-navigation tuiMode="onDark"></cd-navigation>

    <router-outlet></router-outlet>
</tui-root>
`;

const TEMPLATE_AFTER = `
<!-- TODO: (Taiga UI migration) TuiThemeNight has been removed. Please use tuiTheme attribute to set theme https://taiga-ui.dev/directives/theme -->
<tui-theme-night *ngIf="night$ | async"></tui-theme-night>

<!-- TODO: (Taiga UI migration) TuiMode has been removed. Please use tuiTheme attribute to set theme https://taiga-ui.dev/directives/theme -->
<tui-root [tuiMode]="mode">
    <!-- TODO: (Taiga UI migration) TuiMode has been removed. Please use tuiTheme attribute to set theme https://taiga-ui.dev/directives/theme -->
<cd-navigation tuiTheme="dark"></cd-navigation>

    <router-outlet></router-outlet>
</tui-root>
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

    it('should migrate mode in template', async () => {
        const tree = await runner.runSchematic(
            'updateToV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.template.html')).toEqual(TEMPLATE_AFTER);
    });

    it('should migrate mode references in ts files', async () => {
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
