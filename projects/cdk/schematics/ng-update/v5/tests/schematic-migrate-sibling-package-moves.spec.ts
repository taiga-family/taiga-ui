import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update sibling package moves (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'moves radio component/directive/provider from kit to core',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiRadioComponent,
                    TuiRadioDirective,
                    tuiRadioOptionsProvider,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [TuiRadioComponent, TuiRadioDirective],
                    providers: [tuiRadioOptionsProvider({})],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'moves slider helper directives from kit to core',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiSliderKeySteps,
                    TuiSliderKeyStepsBase,
                    TuiSliderReadonly,
                    TuiSliderThumbLabel,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [
                        TuiSliderKeySteps,
                        TuiSliderKeyStepsBase,
                        TuiSliderReadonly,
                        TuiSliderThumbLabel,
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'moves items-handlers token/provider/type from kit to core',
        migrate({
            component: /* TypeScript */ `
                import {
                    TUI_DEFAULT_ITEMS_HANDLERS,
                    TUI_ITEMS_HANDLERS,
                    tuiItemsHandlersProvider,
                    type TuiItemsHandlers,
                } from '@taiga-ui/kit';

                export class TestComponent {
                    protected readonly token = TUI_ITEMS_HANDLERS;
                    protected readonly defaults = TUI_DEFAULT_ITEMS_HANDLERS;
                    protected readonly provider = tuiItemsHandlersProvider;
                    protected readonly handlers: TuiItemsHandlers<unknown> | null = null;
                }
            `,
        }),
    );

    it(
        'moves carousel component/directives from kit to legacy',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiCarouselAutoscroll,
                    TuiCarouselButtons,
                    TuiCarouselComponent,
                    TuiCarouselDirective,
                    TuiCarouselScroll,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [
                        TuiCarouselComponent,
                        TuiCarouselDirective,
                        TuiCarouselAutoscroll,
                        TuiCarouselButtons,
                        TuiCarouselScroll,
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'moves tuiPdfViewerOptionsProvider from kit to legacy',
        migrate({
            component: /* TypeScript */ `
                import {tuiPdfViewerOptionsProvider} from '@taiga-ui/kit';

                export const providers = [tuiPdfViewerOptionsProvider({})];
            `,
        }),
    );

    it(
        'moves TUI_CELL_OPTIONS from layout to core',
        migrate({
            component: /* TypeScript */ `
                import {TUI_CELL_OPTIONS} from '@taiga-ui/layout';

                export class TestComponent {
                    protected readonly token = TUI_CELL_OPTIONS;
                }
            `,
        }),
    );

    it(
        'moves TuiHintComponent from experimental to core',
        migrate({
            component: /* TypeScript */ `
                import {TuiHintComponent} from '@taiga-ui/experimental';

                export class TestComponent {
                    protected readonly hint = TuiHintComponent;
                }
            `,
        }),
    );

    it(
        'moves accordion component/directive from experimental to kit',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiAccordionComponent,
                    TuiAccordionDirective,
                } from '@taiga-ui/experimental';

                @Component({imports: [TuiAccordionComponent, TuiAccordionDirective]})
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
