import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update identifiers migration', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    async function migrateComponent(component: string): Promise<string> {
        return (await runMigration({component, collection})).component;
    }

    it('replaces tuiButtonClose with tuiButtonX', async () => {
        expect(await migrate('<button tuiButtonClose></button>')).toEqual(
            '<button tuiButtonX></button>',
        );
    });

    it('preserves attributes when replacing tuiButtonClose with tuiButtonX', async () => {
        expect(
            await migrate(
                '<button tuiButtonClose appearance="primary" size="m"></button>',
            ),
        ).toEqual('<button tuiButtonX appearance="primary" size="m"></button>');
    });

    it('does not affect other buttons', async () => {
        expect(await migrate('<button tuiButton>Click me</button>')).toEqual(
            '<button tuiButton>Click me</button>',
        );
    });

    it('migrates identifiers to new packages', async () => {
        const result = await migrateComponent(`
            import {TuiAutoColorPipe, TuiSurface} from '@taiga-ui/core';
            import {tuiPure} from '@taiga-ui/cdk';
            import {TuiCell} from '@taiga-ui/layout';

            export class TestComponent {
                protected readonly surface = TuiSurface;
                protected readonly cell = TuiCell;
                protected readonly autoColor = TuiAutoColorPipe;
                protected readonly pure = tuiPure;
            }
        `);

        expect(result).toEqual(
            `import { tuiPure } from "@taiga-ui/legacy";
import { TuiAutoColorPipe } from "@taiga-ui/kit";

            import { TuiCell } from '@taiga-ui/core';
            import { TuiSurface } from '@taiga-ui/layout';

            export class TestComponent {
                protected readonly surface = TuiSurface;
                protected readonly cell = TuiCell;
                protected readonly autoColor = TuiAutoColorPipe;
                protected readonly pure = tuiPure;
            }
        `,
        );
    });

    it('moves TuiFlagPipe from core to kit', async () => {
        const result = await migrateComponent(`
            import {TuiFlagPipe} from '@taiga-ui/core';

            export class TestComponent {
                protected readonly flag = TuiFlagPipe;
            }
        `);

        expect(result).toEqual(
            `import { TuiFlagPipe } from "@taiga-ui/kit";

                        export class TestComponent {
                protected readonly flag = TuiFlagPipe;
            }
        `,
        );
    });

    it('renames ResizeObserverService to WaResizeObserverService', async () => {
        const result = await migrateComponent(`
            import {ResizeObserverService} from '@ng-web-apis/resize-observer';

            export class TestComponent {
                protected readonly observer = ResizeObserverService;
            }
        `);

        expect(result).toEqual(
            `import { WaResizeObserverService } from "@ng-web-apis/resize-observer";

                        export class TestComponent {
                protected readonly observer = WaResizeObserverService;
            }
        `,
        );
    });

    it('moves tuiCellOptionsProvider from layout to core', async () => {
        const result = await migrateComponent(`
            import {tuiCellOptionsProvider} from '@taiga-ui/layout';

            export const providers = [tuiCellOptionsProvider({size: 'm'})];
        `);

        expect(result).toEqual(
            `import { tuiCellOptionsProvider } from "@taiga-ui/core";

                        export const providers = [tuiCellOptionsProvider({size: 'm'})];
        `,
        );
    });

    it('moves TuiTimeMode type from cdk to MaskitoTimeMode in maskito kit', async () => {
        const result = await migrateComponent(`
            import {type TuiTimeMode} from '@taiga-ui/cdk';

            export type Mode = TuiTimeMode;
        `);

        expect(result).toEqual(
            `import { MaskitoTimeMode } from "@maskito/kit";

                        export type Mode = MaskitoTimeMode;
        `,
        );
    });

    it('migrates sheet identifiers from legacy to addon-mobile', async () => {
        const result = await migrateComponent(`
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
        `);

        expect(result).toEqual(
            `import { TuiSheetDialog, TuiSheetDialogOptions, TuiSheetDialogService } from "@taiga-ui/addon-mobile";

            export class TestComponent {
                protected readonly moduleRef = TuiSheetDialog;
                protected readonly options: TuiSheetDialogOptions = {};
                protected readonly service = TuiSheetDialogService;
            }
        `,
        );
    });

    afterEach(() => resetActiveProject());
});
