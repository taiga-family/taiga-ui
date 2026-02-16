import {join} from 'node:path';

import {runMigration} from '@taiga-ui/cdk/schematics/utils/run-migration';
import {resetActiveProject} from 'ng-morph';

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
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
        <!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
    \`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
// TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size
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
// TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size
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
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
<!-- TODO: (Taiga UI migration) use --tui-thumb-size. Learn more: https://taiga-ui.dev/components/slider#size -->
<tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
`;

describe('ng-update comment for --tui-thickness', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('should add comment for --tui-thickness in styles', async () => {
        const {styles} = await runMigration({
            collection,
            styles: STYLES_BEFORE,
        });

        expect(styles).toEqual(STYLES_AFTER);
    });

    it('should add comment for --tui-thickness in ts files', async () => {
        const {component} = await runMigration({
            collection,
            component: COMPONENT_BEFORE,
        });

        expect(component).toEqual(COMPONENT_AFTER);
    });

    it('should add comment for --tui-thickness in html files', async () => {
        const {template} = await runMigration({
            collection,
            template: TEMPLATE_BEFORE,
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

        expect(template).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => resetActiveProject());
});
