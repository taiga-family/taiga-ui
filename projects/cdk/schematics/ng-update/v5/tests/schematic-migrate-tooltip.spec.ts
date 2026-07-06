import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate TuiTooltipModule to TuiTooltip and <tui-tooltip> to <tui-icon [tuiTooltip]>',
        migrate({
            component: /* TypeScript */ `
                import {TuiTooltipModule} from '@taiga-ui/legacy';

                @NgModule({
                    imports: [
                        // ...
                        TuiTooltipModule,
                    ],
                    // ...
                })
                export class MyModule {}

                @Component({
                    standalone: true,
                    imports: [
                        // ...
                        TuiTooltipModule,
                    ],
                    templateUrl: './test.html',
                    // ...
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-tooltip [content]="tooltip" />

                <tui-tooltip
                    direction="top-left"
                    [content]="tooltip"
                    [describeId]="id"
                />

                <tui-tooltip
                    appearance="error"
                    content="Static text"
                    [context]="ctx"
                    [hideDelay]="200"
                    [showDelay]="100"
                />

                <tui-tooltip [content]="tooltip"></tui-tooltip>
            `,
        }),
    );

    it(
        'keeps existing tui-icon[tuiTooltip] directive usage untouched',
        migrate({
            component: /* TypeScript */ `
                import {TuiTooltip} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    imports: [TuiTooltip],
                    templateUrl: './test.html',
                })
                export class MyComponent {}
            `,
            template: /* HTML */ `
                <tui-icon
                    tuiHintDirection="end"
                    tuiTooltip="Already migrated"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
