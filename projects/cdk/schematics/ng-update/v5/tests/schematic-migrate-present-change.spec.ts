import {join} from 'node:path';

import {runMigration} from '@taiga-ui/cdk/schematics/utils/run-migration';
import {resetActiveProject} from 'ng-morph';

const COMPONENT_BEFORE = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`<span>I am a component</span>\`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
      '(tuiPresentChange)': 'onChangeEvent($event)',
    }
})
export class Test {
}`;

const COMPONENT_AFTER = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`<span>I am a component</span>\`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
      '(tuiPresent)': 'onChangeEvent($event)',
    }
})
export class Test {
}`;

const COMPONENT_WITH_TEMPLATE_BEFORE = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`<span (tuiPresentChange)="onChangeEvent($event)">I am a changeable component</span>\`,
})
export class Test {
}`;

const COMPONENT_WITH_TEMPLATE_AFTER = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`<span (tuiPresent)="onChangeEvent($event)">I am a changeable component</span>\`,
})
export class Test {
}`;

const TEMPLATE_BEFORE =
    '<span (tuiPresentChange)="onChangeEvent($event)">I am a changeable component</span>';
const TEMPLATE_AFTER =
    '<span (tuiPresent)="onChangeEvent($event)">I am a changeable component</span>';

describe('ng-update tuiPresentChange attribute', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('should replace tuiPresentChange attribute to tuiPresent in ts files in host', async () => {
        const {component} = await runMigration({
            collection,
            component: COMPONENT_BEFORE,
        });

        expect(component).toEqual(COMPONENT_AFTER);
    });

    it('should replace tuiPresentChange attribute to tuiPresent in ts files in template', async () => {
        const {component} = await runMigration({
            collection,
            component: COMPONENT_WITH_TEMPLATE_BEFORE,
        });

        expect(component).toEqual(COMPONENT_WITH_TEMPLATE_AFTER);
    });

    it('should replace tuiPresentChange attribute to tuiPresent in html files', async () => {
        const {template} = await runMigration({
            collection,
            template: TEMPLATE_BEFORE,
            component: `
                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        });

        expect(template).toEqual(TEMPLATE_AFTER);
    });

    afterEach(() => resetActiveProject());
});
