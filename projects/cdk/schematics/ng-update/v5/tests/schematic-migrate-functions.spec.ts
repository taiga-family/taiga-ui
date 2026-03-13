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
            component: `
                import { tuiIsNativeFocused } from "@taiga-ui/cdk";

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
            component: `
                import { tuiIsNativeFocusedIn } from "@taiga-ui/cdk";

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
            component: `
                import { tuiGetNativeFocused } from "@taiga-ui/cdk";

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
            component: `
            import { tuiIsNativeKeyboardFocusable } from "@taiga-ui/cdk";

            tuiIsNativeKeyboardFocusable(document.createElement('div'));
            `,
        }),
    );

    it(
        'migrate tuiBlurNativeFocused to tuiBlurFocused',
        migrate({
            component: `
                import { tuiBlurNativeFocused } from "@taiga-ui/cdk";

                tuiBlurNativeFocused(document);
            `,
        }),
    );

    it(
        'migrate tuiIsApple from @taiga-ui/legacy to isApple',
        migrate({
            component: `
                import { tuiIsApple } from "@taiga-ui/legacy";

                tuiIsApple(navigator);
            `,
        }),
    );

    it(
        'migrate tuiIsApple from @taiga-ui/cdk to isApple',
        migrate({
            component: `
                import { tuiIsApple } from "@taiga-ui/cdk";

                tuiIsApple(navigator);
            `,
        }),
    );

    it(
        'migrate tuiIsIos from @taiga-ui/cdk to isIos',
        migrate({
            component: `
                import { tuiIsIos } from "@taiga-ui/cdk";

                tuiIsIos(navigator);
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
