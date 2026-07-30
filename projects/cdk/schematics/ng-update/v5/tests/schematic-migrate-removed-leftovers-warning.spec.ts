import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update leftover removed symbols warnings (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comments for removed @taiga-ui/core symbols',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_DATA_LIST_ACCESSOR,
                    TUI_HINT_PROVIDERS,
                    TUI_THEME,
                    TuiDataListDirective,
                    type TuiLinkOptions,
                    tuiAsDataList,
                    tuiAsDataListAccessor,
                } from '@taiga-ui/core';

                @Component({
                    providers: [TUI_HINT_PROVIDERS],
                })
                export class TestComponent {
                    protected readonly theme = inject(TUI_THEME);
                    protected readonly link: TuiLinkOptions | null = null;
                    protected readonly accessor = inject(TUI_DATA_LIST_ACCESSOR);
                    protected readonly as = [
                        tuiAsDataList,
                        tuiAsDataListAccessor,
                        TuiDataListDirective,
                    ];
                }
            `,
        }),
    );

    it(
        'adds TODO comments for removed @taiga-ui/kit symbols',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiActionBarDirective,
                    TuiInputPassword,
                    type TuiSliderOptions,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [TuiInputPassword, TuiActionBarDirective],
                })
                export class TestComponent {
                    protected readonly options: TuiSliderOptions | null = null;
                }
            `,
        }),
    );

    it(
        'adds TODO comments for removed @taiga-ui/addon-mobile symbols',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiSidebarComponent,
                    TuiSidebarDirective,
                    tuiFindTouchIndex,
                } from '@taiga-ui/addon-mobile';

                @Component({
                    imports: [TuiSidebarComponent, TuiSidebarDirective],
                })
                export class TestComponent {
                    protected readonly find = tuiFindTouchIndex;
                }
            `,
        }),
    );

    it(
        'adds TODO comments for removed @taiga-ui/addon-commerce input-card options',
        migrate({
            component: /* TypeScript */ `
                import {Component, inject} from '@angular/core';
                import {
                    TUI_INPUT_CARD_DEFAULT_OPTIONS,
                    type TuiInputCardOptions,
                } from '@taiga-ui/addon-commerce';

                @Component({})
                export class TestComponent {
                    protected readonly defaults = inject(TUI_INPUT_CARD_DEFAULT_OPTIONS);
                    protected readonly options: TuiInputCardOptions | null = null;
                }
            `,
        }),
    );

    it(
        'adds TODO comment for removed @taiga-ui/addon-table TUI_TABLE_PROVIDER',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TUI_TABLE_PROVIDER} from '@taiga-ui/addon-table';

                @Component({
                    providers: [TUI_TABLE_PROVIDER],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO comments for removed @taiga-ui/testing harnesses and mocks',
        migrate({
            component: /* TypeScript */ `
                import {
                    TuiIslandHarness,
                    TuiMockEvent,
                    TuiPrimitiveTextfieldHarness,
                    TuiSvgHarness,
                    TuiThumbnailCardHarness,
                } from '@taiga-ui/testing';

                export class TestHarnessSuite {
                    protected readonly harnesses = [
                        TuiIslandHarness,
                        TuiSvgHarness,
                        TuiThumbnailCardHarness,
                        TuiPrimitiveTextfieldHarness,
                    ];

                    protected readonly event = TuiMockEvent;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
