import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update remaining v5 leftovers (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames leftover core/kit/testing identifiers',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiDropdownPortal,
                    TuiWithTextfield,
                    tuiStringHashToHsl,
                } from '@taiga-ui/core';
                import {tuiSwitchNgDevMode} from '@taiga-ui/testing';

                @Component({
                    hostDirectives: [TuiWithTextfield],
                })
                export class TestComponent {
                    protected readonly portal = TuiDropdownPortal;
                    protected readonly color = tuiStringHashToHsl('value');

                    constructor() {
                        tuiSwitchNgDevMode(true);
                    }
                }
            `,
        }),
    );

    it(
        'adds TODO comments for removed accordion-item symbols',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {
                    TuiAccordionItem,
                    TuiAccordionItemContent,
                    TuiAccordionItemEagerContent,
                } from '@taiga-ui/kit';

                @Component({
                    imports: [
                        TuiAccordionItem,
                        TuiAccordionItemContent,
                        TuiAccordionItemEagerContent,
                    ],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'migrates leftover CSS variables and warns on removed ones',
        migrate({
            styles: /* CSS */ `
                .foo {
                    font: var(--tui-font-heading-1);
                    font-family: var(--tui-font-heading);
                    background: var(--tui-backdrop);
                    transition-duration: var(--tui-animation-duration-moderate);
                    animation-duration: var(--tui-animation-duration-slow);
                    animation-timing-function: var(--tui-animation-curve-expressive-entrance);
                    color: var(--tui-slider-track-color);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
