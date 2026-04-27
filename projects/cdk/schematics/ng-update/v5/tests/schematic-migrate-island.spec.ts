import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-island to tuiCardLarge', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {Component} from '@angular/core';
            import {TuiIslandDirective} from '@taiga-ui/legacy';

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiIslandDirective],
            })
            export class TestComponent {}
        `,
    });

    it(
        'replaces tui-island tag and import',
        migrate({template: '<tui-island appearance="flat">Content</tui-island>'}),
    );

    it('handles self-closing tui-island', migrate({template: '<tui-island />'}));

    it(
        'renames [tuiAppearance] to [appearance] for [tuiCardLarge]',
        migrate({template: '<div tuiCardLarge tuiAppearance="appearance"></div>'}),
    );

    it(
        'replace [tuiCardLarge][tuiSurface="elevated"] to [tuiCardLarge][appearance="floating"]',
        migrate({
            template: /* HTML */ `
                <div
                    [tuiCardLarge]="size"
                    tuiSurface="elevated"
                ></div>
                <p
                    tuiCardLarge
                    [tuiSurface]="'elevated'"
                ></p>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
