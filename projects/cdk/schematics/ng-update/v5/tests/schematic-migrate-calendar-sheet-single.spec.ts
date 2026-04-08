import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update calendar-sheet [single] → tuiCalendarSheetOptionsProvider', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes [single]="false" and adds tuiCalendarSheetOptionsProvider({rangeMode: true}) to providers',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet [single]="false" />',
        }),
    );

    it(
        'removes [single]="true" without adding provider (default behavior)',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet [single]="true" />',
        }),
    );

    it(
        'removes plain single attribute without adding provider',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet single />',
        }),
    );

    it(
        'removes [single]="false" and adds rangeMode: true to existing tuiCalendarSheetOptionsProvider call',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet, tuiCalendarSheetOptionsProvider} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                    providers: [tuiCalendarSheetOptionsProvider({someOption: 'x'})],
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet [single]="false" />',
        }),
    );

    it(
        'removes [single]="false" and updates rangeMode in existing tuiCalendarSheetOptionsProvider call',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet, tuiCalendarSheetOptionsProvider} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                    providers: [tuiCalendarSheetOptionsProvider({rangeMode: false})],
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet [single]="false" />',
        }),
    );

    it(
        'adds TODO comment and removes dynamic [single]="expr" binding',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected isSingle = true;
                }
            `,
            template: '<tui-calendar-sheet [single]="isSingle" />',
        }),
    );

    it(
        'handles multiple tui-calendar-sheet elements in one template',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-calendar-sheet [single]="false" />
                <tui-calendar-sheet [single]="true" />
            `,
        }),
    );

    it(
        'removes [single]="true" without touching existing tuiCalendarSheetOptionsProvider({rangeMode: true})',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCalendarSheet, tuiCalendarSheetOptionsProvider} from '@taiga-ui/core';

                @Component({
                    standalone: true,
                    imports: [TuiCalendarSheet],
                    templateUrl: './test.html',
                    providers: [tuiCalendarSheetOptionsProvider({rangeMode: true})],
                })
                export class TestComponent {}
            `,
            template: '<tui-calendar-sheet [single]="true" />',
        }),
    );

    afterEach(() => resetActiveProject());
});
