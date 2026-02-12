import {join} from 'node:path';

import {HostTree} from '@angular-devkit/schematics';
import {SchematicTestRunner, UnitTestTree} from '@angular-devkit/schematics/testing';
import {type TuiSchema} from '@taiga-ui/cdk/schematics/ng-add/schema';
import {runMigration} from '@taiga-ui/cdk/schematics/utils/run-migration';
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
    template: \`
        <tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

        <tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
        <tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

        <tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
        <tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
    \`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
      '[style.--tui-thickness.rem]': '1.25',
    }
})
export class Test {
}`;

const COMPONENT_AFTER = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
    \`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
// TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size
      '[style.--tui-thickness.rem]': '1.25',
    }
})
export class Test {
}`;

const STYLES_BEFORE = `@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    --tui-thickness: 1.5rem;
}`;

const STYLES_AFTER = `@import '@taiga-ui/styles/utils';

:host {
// TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size
    --tui-thickness: 1.5rem;
}`;

const TEMPLATE_BEFORE = `
<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

<tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
<tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

<tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
<tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
`;

const TEMPLATE_AFTER = `
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/next/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
`;

describe('ng-update comment for --tui-thickness', () => {
    describe('for styles and ts files', () => {
        let host: UnitTestTree;
        let runner: SchematicTestRunner;

        beforeEach(() => {
            host = new UnitTestTree(new HostTree());
            runner = new SchematicTestRunner('schematics', collectionPath);

            setActiveProject(createProject(host));

            createMainFiles();

            saveActiveProject();
        });

        it('should add comment for --tui-thickness in styles', async () => {
            const tree = await runner.runSchematic(
                'updateToV5',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            );

            expect(tree.readContent('test/app/test.style.less')).toEqual(STYLES_AFTER);
        });

        it('should add comment for --tui-thickness in ts files', async () => {
            const tree = await runner.runSchematic(
                'updateToV5',
                {'skip-logs': process.env['TUI_CI'] === 'true'} as Partial<TuiSchema>,
                host,
            );

            expect(tree.readContent('test/app/test.component.ts')).toEqual(
                COMPONENT_AFTER,
            );
        });

        afterEach(() => {
            resetActiveProject();
        });
    });

    describe('for html files', () => {
        const collection = join(__dirname, '../../../migration.json');

        async function migrate(template: string): Promise<string> {
            const {template: result} = await runMigration({
                template,
                collection,
                component: `
                import {TuiInputRange} from '@taiga-ui/kit';
                import {TuiRange} from '@taiga-ui/kit/components/range';
                import {TuiSlider} from '@taiga-ui/kit/components/slider';

                @Component({
                    templateUrl: './test.html',
                    imports: [TuiRange, TuiSlider, TuiInputRange],
                })
                export class TestComponent {}
            `,
            });

            return result;
        }

        it('should add comment for --tui-thickness in html files', async () => {
            expect(await migrate(TEMPLATE_BEFORE)).toEqual(TEMPLATE_AFTER);
        });

        afterEach(() => resetActiveProject());
    });
});

function createMainFiles(): void {
    createSourceFile('test/app/test.component.ts', COMPONENT_BEFORE);

    createSourceFile('test/app/test.style.less', STYLES_BEFORE);

    createSourceFile('package.json', '{"dependencies": {"@angular/core": "~13.0.0"}}');
}
