import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update arrow mode', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO above TUI_ARROW_MODE usage in providers',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_ARROW, TUI_ARROW_MODE} from '@taiga-ui/legacy';

                @Component({
                    templateUrl: './test.html',
                    providers: [
                        {
                            provide: TUI_ARROW_MODE,
                            useValue: {interactive: TUI_ARROW, disabled: ''},
                        },
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO above TUI_ARROW_MODE inject usage',
        migrate({
            component: `
                import {inject} from '@angular/core';
                import {TUI_ARROW_MODE} from '@taiga-ui/legacy';

                export class TestComponent {
                    private readonly arrowMode = inject(TUI_ARROW_MODE);
                }
            `,
        }),
    );

    it(
        'adds TODO above tuiArrowModeProvider usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TUI_ARROW, tuiArrowModeProvider} from '@taiga-ui/legacy';

                @Component({
                    templateUrl: './test.html',
                    providers: [
                        tuiArrowModeProvider({interactive: TUI_ARROW, disabled: ''}),
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO above TuiArrowMode type usage',
        migrate({
            component: `
                import {Inject} from '@angular/core';
                import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/legacy';

                export class TestComponent {
                    constructor(
                        @Inject(TUI_ARROW_MODE) readonly arrowMode: TuiArrowMode,
                    ) {}
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
