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

const COMPONENT_BEFORE = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    host: {
      '[style.--tui-accent-active]': 'red',
      '[style.--tui-support-13]': 'green',
      '[style.--tui-chart-2]': 'blue',
    }
})
export class Test {
   flag = false;

   get color(): string {
     return this.flag ? 'var(--tui-base-05)' : 'var(--tui-primary-text)';
   }
}`;

const COMPONENT_AFTER = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    templateUrl: './test.template.html',
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
      '[style.--tui-chart-categorical-13]': 'green',
      '[style.--tui-chart-categorical-02]': 'blue',
    }
})
export class Test {
   flag = false;

   get color(): string {
     return this.flag ? 'var(--tui-border-hover)' : 'var(--tui-text-primary-on-accent-1)';
   }
}`;

const STYLES_BEFORE = `@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    color: var(--tui-text-primary);
    --tui-base-01: 'black';
    --tui-info-bg-night: 'blue';

    &_error {
        color: var(--tui-error-fill);
    }
}`;

const STYLES_AFTER = `@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    color: var(--tui-text-primary);
    --tui-background-base: 'black';
// TODO: use tuiTheme="dark" on an element to switch colors to dark theme
    --tui-status-info-pale: 'blue';

    &_error {
        color: var(--tui-status-negative);
    }
}`;

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

    it('should migrate css vars in styles', async () => {
        const tree = await runner.runSchematic(
            'migrateCssVarsV4',
            {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
            host,
        );

        expect(tree.readContent('test/app/test.style.less')).toEqual(STYLES_AFTER);
    });

    it('should migrate css vars in ts files', async () => {
        const tree = await runner.runSchematic(
            'migrateCssVarsV4',
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

    createSourceFile('test/app/test.style.less', STYLES_BEFORE);

    createSourceFile(
        'package.json',
        '{"dependencies": {"@angular/core": "~13.0.0", "@taiga-ui/addon-commerce": "~3.42.0"}}',
    );
}
