import {join} from 'node:path';

import {createMigration} from '@taiga-ui/cdk/schematics/utils/run-migration';
import {resetActiveProject} from 'ng-morph';

const COMPONENT = `import { Component } from "@angular/core";

@Component({
    standalone: true,
    template: \`<span (tuiPresentChange)="onChangeEvent($event)">I am a changeable component</span>\`,
    host: {
      '[style.--tui-background-accent-2-pressed]': 'red',
      '(tuiPresentChange)': 'onChangeEvent($event)',
    }
})
export class Test {
}`;

const TEMPLATE =
    '<span (tuiPresentChange)="onChangeEvent($event)">I am a changeable component</span>';

describe('ng-update tuiPresentChange attribute', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should replace tuiPresentChange attribute to tuiPresent in ts files',
        migrate({component: COMPONENT}),
    );

    it(
        'should replace tuiPresentChange attribute to tuiPresent in html files',
        migrate({template: TEMPLATE}),
    );

    afterEach(() => resetActiveProject());
});
