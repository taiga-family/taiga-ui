import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update warn on removed cdk utilities/tokens/types (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'warns on removed cdk environment/platform tokens',
        migrate({
            component: /* TypeScript */ `
                import {
                    TUI_ALLOW_SIGNAL_WRITES,
                    TUI_BASE_HREF,
                    TUI_MOBILE_REGEXP,
                } from '@taiga-ui/cdk';

                export class TestComponent {
                    protected readonly a = TUI_ALLOW_SIGNAL_WRITES;
                    protected readonly b = TUI_BASE_HREF;
                    protected readonly e = TUI_MOBILE_REGEXP;
                }
            `,
        }),
    );

    it(
        'warns on removed cdk types and directive contexts',
        migrate({
            component: /* TypeScript */ `
                import {
                    type TuiLetContext,
                    type TuiLooseUnion,
                    type TuiRepeatTimesContext,
                    type TuiSafeHtml,
                    type TuiValuePresentException,
                    type TuiValuesOf,
                } from '@taiga-ui/cdk';

                export class TestComponent {
                    protected readonly html: TuiSafeHtml | null = null;
                    protected readonly union: TuiLooseUnion<'a'> | null = null;
                    protected readonly values: TuiValuesOf<
                        Record<string, number>
                    > | null = null;
                    protected readonly letContext: TuiLetContext<unknown> | null = null;
                    protected readonly repeatContext: TuiRepeatTimesContext | null = null;
                    protected readonly error: TuiValuePresentException | null = null;
                }
            `,
        }),
    );

    it(
        'warns on removed cdk DOM utilities',
        migrate({
            component: /* TypeScript */ `
                import {
                    tuiDirectiveListener,
                    tuiGetElementPoint,
                    tuiIsCurrentTarget,
                    tuiIsInsideIframe,
                    tuiIsNodeIn,
                    tuiRetargetedBoundaryCrossing,
                } from '@taiga-ui/cdk';

                export class TestComponent {
                    protected readonly listener = tuiDirectiveListener;
                    protected readonly point = tuiGetElementPoint;
                    protected readonly current = tuiIsCurrentTarget;
                    protected readonly iframe = tuiIsInsideIframe;
                    protected readonly nodeIn = tuiIsNodeIn;
                    protected readonly retarget = tuiRetargetedBoundaryCrossing;
                }
            `,
        }),
    );

    it(
        'warns on removed cdk miscellaneous and math utilities',
        migrate({
            component: /* TypeScript */ `
                import {
                    tuiGetOriginalArrayFromQueryList,
                    tuiInjectId,
                    tuiIsValidUrl,
                    tuiMustBePresent,
                    tuiQueryListChanges,
                    tuiToInteger,
                    tuiToRadians,
                    tuiUniqBy,
                } from '@taiga-ui/cdk';

                export class TestComponent {
                    protected readonly arr = tuiGetOriginalArrayFromQueryList;
                    protected readonly id = tuiInjectId;
                    protected readonly url = tuiIsValidUrl;
                    protected readonly present = tuiMustBePresent;
                    protected readonly changes = tuiQueryListChanges;
                    protected readonly int = tuiToInteger;
                    protected readonly rad = tuiToRadians;
                    protected readonly uniq = tuiUniqBy;
                }
            `,
        }),
    );

    it(
        'replaces removed e2e-detection tokens with WA_IS_E2E',
        migrate({
            component: /* TypeScript */ `
                import {TUI_IS_CYPRESS, TUI_IS_PLAYWRIGHT} from '@taiga-ui/cdk';

                export class TestComponent {
                    protected readonly cypress = TUI_IS_CYPRESS;
                    protected readonly playwright = TUI_IS_PLAYWRIGHT;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
