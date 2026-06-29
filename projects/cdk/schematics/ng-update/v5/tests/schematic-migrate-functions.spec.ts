import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrate tuiIsNativeFocused to tuiIsFocused',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsNativeFocused} from '@taiga-ui/cdk';

                @Component({})
                export class Test {
                    public ngOnDestroy(): void {
                        if (tuiIsNativeFocused(this.el)) {
                            this.el.blur();
                        }
                    }
                }
            `,
        }),
    );

    it(
        'migrate tuiIsNativeFocusedIn to tuiIsFocusedIn',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsNativeFocusedIn} from '@taiga-ui/cdk';

                @Component({})
                export class Test {
                    public handleFocusLossIfNecessary(element: Element = this.el): void {
                        if (tuiIsNativeFocusedIn(element)) {
                            this.origin?.focus({preventScroll: true});
                        }
                    }
                }
            `,
        }),
    );

    it(
        'migrate tuiGetNativeFocused to tuiGetFocused',
        migrate({
            component: /* TypeScript */ `
                import {tuiGetNativeFocused} from '@taiga-ui/cdk';

                @Component({})
                export class Test {
                    private get focused(): boolean {
                        return this.dropdown.el.contains(tuiGetNativeFocused(this.doc));
                    }
                }
            `,
        }),
    );

    it(
        'migrate tuiIsNativeKeyboardFocusable to tuiIsFocusable',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsNativeKeyboardFocusable} from '@taiga-ui/cdk';

                tuiIsNativeKeyboardFocusable(document.createElement('div'));
            `,
        }),
    );

    it(
        'migrate tuiIsNativeMouseFocusable to tuiIsFocusable',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsNativeMouseFocusable} from '@taiga-ui/cdk';

                tuiIsNativeMouseFocusable(document.createElement('div'));
            `,
        }),
    );

    it(
        'migrate tuiGetClosestFocusable with drop removed keyboard option',
        migrate({
            component: /* TypeScript */ `
                import {
                    tuiGetClosestFocusable,
                    tuiIsNativeMouseFocusable,
                } from '@taiga-ui/cdk';

                @Component({})
                export class Test {
                    private findNextTool(
                        wrapper?: HTMLElement | null,
                    ): HTMLElement | null {
                        return !wrapper || tuiIsNativeMouseFocusable(wrapper)
                            ? (wrapper ?? null)
                            : tuiGetClosestFocusable({
                                  initial: wrapper,
                                  root: this.el,
                                  keyboard: false,
                              });
                    }
                }
            `,
        }),
    );

    it(
        'migrate tuiBlurNativeFocused to tuiBlurFocused',
        migrate({
            component: /* TypeScript */ `
                import {tuiBlurNativeFocused} from '@taiga-ui/cdk';

                tuiBlurNativeFocused(document);
            `,
        }),
    );

    it(
        'migrate tuiIsApple from @taiga-ui/legacy to isApple',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsApple} from '@taiga-ui/legacy';

                tuiIsApple(navigator);
            `,
        }),
    );

    it(
        'migrate tuiIsApple from @taiga-ui/cdk to isApple',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsApple} from '@taiga-ui/cdk';

                tuiIsApple(navigator);
            `,
        }),
    );

    it(
        'migrate tuiIsIos from @taiga-ui/cdk to isIos',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsIos} from '@taiga-ui/cdk';

                tuiIsIos(navigator);
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
