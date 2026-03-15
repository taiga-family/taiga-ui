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
            component: `
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
            component: `
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
            component: `
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
            component: `
                import {tuiCellOptionsProvider} from '@taiga-ui/layout';

                export const providers = [tuiCellOptionsProvider({size: 'm'})];
            `,
        }),
    );

    it(
        'moves TuiTimeMode type from cdk to MaskitoTimeMode in maskito kit',
        migrate({
            component: `
                import {type TuiTimeMode} from '@taiga-ui/cdk';

                export type Mode = TuiTimeMode;
            `,
        }),
    );

    it(
        'migrates sheet identifiers from legacy to addon-mobile',
        migrate({
            component: `
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
        'moves TuiStatus from legacy to kit',
        migrate({
            component: `
                import {TuiStatus} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiStatus],
                    template: '<span tuiStatus="var(--tui-status-positive)">OK</span>',
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
