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
            template: `
                <tui-icon
                    icon="@tui.box"
                    tuiBadge
                />
                <tui-icon
                    [icon]="icon"
                    tuiBadge
                />
                <tui-icon icon="@tui.box"></tui-icon>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
