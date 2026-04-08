import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should migrate tui-icon badge icon input to iconStart',
        migrate({
            component: `
                import {Component} from '@angular/core';

                @Component({
                  standalone: true,
                  templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-icon
                    icon="@tui.box"
                    tuiBadge
                />
                <tui-icon
                    tuiBadge
                    [icon]="icon"
                />
                <tui-icon icon="@tui.box"></tui-icon>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
