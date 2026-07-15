import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiSvg to TuiIcon', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tag, src/[src] attrs and the TuiSvgComponent import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiSvgComponent} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiSvgComponent],
                    template: \`
                        <tui-svg src="@tui.house"></tui-svg>
                        <tui-svg [src]="icon"></tui-svg>
                    \`,
                })
                export class TestComponent {
                    protected readonly icon = '@tui.user';
                }
            `,
        }),
    );

    it(
        'comments only the breaking cases (raw SVG, dynamic binding), not icon names or URLs',
        migrate({
            template: /* HTML */ `
                <tui-svg src="@tui.house"></tui-svg>
                <tui-svg src="assets/icons/custom.svg"></tui-svg>
                <tui-svg src="<svg><path /></svg>"></tui-svg>
                <tui-svg [src]="icon"></tui-svg>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
