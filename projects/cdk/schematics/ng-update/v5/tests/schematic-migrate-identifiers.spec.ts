import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update identifiers migration', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tuiButtonClose with tuiButtonX',
        migrate({template: '<button tuiButtonClose></button>'}),
    );

    it(
        'preserves attributes when replacing tuiButtonClose with tuiButtonX',
        migrate({
            template: '<button tuiButtonClose appearance="primary" size="m"></button>',
        }),
    );

    it(
        'does not affect other buttons',
        migrate({template: '<button tuiButton>Click me</button>'}),
    );

    it(
        'migrates identifiers to new packages',
        migrate({
            component: /* TypeScript */ `
                import {TuiAutoColorPipe, TuiSurface} from '@taiga-ui/core';
                import {tuiPure} from '@taiga-ui/cdk';
                import {TuiCell} from '@taiga-ui/layout';

                export class TestComponent {
                    protected readonly surface = TuiSurface;
                    protected readonly cell = TuiCell;
                    protected readonly autoColor = TuiAutoColorPipe;
                    protected readonly pure = tuiPure;
                }
            `,
        }),
    );

    it(
        'moves TuiFlagPipe from core to kit',
        migrate({
            component: /* TypeScript */ `
                import {TuiFlagPipe} from '@taiga-ui/core';

                export class TestComponent {
                    protected readonly flag = TuiFlagPipe;
                }
            `,
        }),
    );

    it(
        'renames ResizeObserverService to WaResizeObserverService',
        migrate({
            component: /* TypeScript */ `
                import {ResizeObserverService} from '@ng-web-apis/resize-observer';

                export class TestComponent {
                    protected readonly observer = ResizeObserverService;
                }
            `,
        }),
    );

    it(
        'moves tuiCellOptionsProvider from layout to core',
        migrate({
            component: /* TypeScript */ `
                import {tuiCellOptionsProvider} from '@taiga-ui/layout';

                export const providers = [tuiCellOptionsProvider({size: 'm'})];
            `,
        }),
    );

    it(
        'moves TuiTimeMode type from cdk to MaskitoTimeMode in maskito kit',
        migrate({
            component: /* TypeScript */ `
                import {type TuiTimeMode} from '@taiga-ui/cdk';

                export type Mode = TuiTimeMode;
            `,
        }),
    );

    it(
        'migrates sheet identifiers from legacy to addon-mobile',
        migrate({
            component: /* TypeScript */ `
                import {
                    TuiSheetModule,
                    TuiSheetDialogOptions,
                    TuiSheetService,
                } from '@taiga-ui/legacy';

                export class TestComponent {
                    protected readonly moduleRef = TuiSheetModule;
                    protected readonly options: TuiSheetDialogOptions = {};
                    protected readonly service = TuiSheetService;
                }
            `,
        }),
    );

    it(
        'adds TODO for TuiStatus type (cannot be auto-migrated to string literal)',
        migrate({
            component: /* TypeScript */ `
                import {type TuiStatus} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    template: '',
                })
                export class TestComponent {
                    public status: TuiStatus = 'error';
                }
            `,
        }),
    );

    it(
        'moves tuiIsFlat from @taiga-ui/kit to @taiga-ui/cdk',
        migrate({component: "import {tuiIsFlat} from '@taiga-ui/kit';"}),
    );

    it(
        'keeps tuiIsFlat usages in source code when migrating from @taiga-ui/kit',
        migrate({
            component: /* TypeScript */ `
                import {tuiIsFlat} from '@taiga-ui/kit';

                export class TestComponent {
                    filter(items: readonly unknown[]): boolean {
                        return tuiIsFlat(items);
                    }
                }
            `,
        }),
    );

    it(
        'moves TUI_CALENDAR_DATE_STREAM from @taiga-ui/kit to @taiga-ui/addon-mobile',
        migrate({
            component: /* TypeScript */ `
                import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';

                export class TestComponent {
                    protected readonly stream = TUI_CALENDAR_DATE_STREAM;
                }
            `,
        }),
    );

    it(
        'migrates TuiOptionNew to TuiOption',
        migrate({
            component: /* TypeScript */ `
                import {TuiOptionNew} from '@taiga-ui/core';

                export class TestComponent {
                    protected readonly option = TuiOptionNew;
                }
            `,
        }),
    );

    it(
        'migrates provideEventPlugins to provideTaiga',
        migrate({
            component: /* TypeScript */ `
                import {provideEventPlugins} from '@taiga-ui/event-plugins';

                export const appConfig: ApplicationConfig = {
                    providers: [provideEventPlugins()];
                };
            `,
        }),
    );

    it(
        'migrates NG_EVENT_PLUGINS to provideTaiga',
        migrate({
            component: /* TypeScript */ `
                import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

                export const appConfig: ApplicationConfig = {
                    providers: [NG_EVENT_PLUGINS];
                };
            `,
        }),
    );

    it(
        'migrates TUI_SANITIZER from legacy to TUI_EDITOR_SANITIZER in editor',
        migrate({
            component: /* TypeScript */ `
                import {TUI_SANITIZER} from '@taiga-ui/legacy';
                import {NgDompurifySanitizer} from '@taiga-ui/dompurify';

                export const providers = [
                    {
                        provide: TUI_SANITIZER,
                        useClass: NgDompurifySanitizer,
                    },
                ];
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
