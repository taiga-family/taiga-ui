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
            [
                'import { tuiPure } from "@taiga-ui/legacy";',
                'import { TuiAutoColorPipe } from "@taiga-ui/kit";',
                '',
                "            import { TuiCell } from '@taiga-ui/core';",
                "            import { TuiSurface } from '@taiga-ui/layout';",
                '',
                '            export class TestComponent {',
                '                protected readonly surface = TuiSurface;',
                '                protected readonly cell = TuiCell;',
                '                protected readonly autoColor = TuiAutoColorPipe;',
                '                protected readonly pure = tuiPure;',
                '            }',
                '        ',
            ].join('\n'),
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
            [
                'import { TuiFlagPipe } from "@taiga-ui/kit";',
                '',
                '                        export class TestComponent {',
                '                protected readonly flag = TuiFlagPipe;',
                '            }',
                '        ',
            ].join('\n'),
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
            [
                'import { WaResizeObserverService } from "@ng-web-apis/resize-observer";',
                '',
                '                        export class TestComponent {',
                '                protected readonly observer = WaResizeObserverService;',
                '            }',
                '        ',
            ].join('\n'),
        );
    });

    afterEach(() => resetActiveProject());
});
