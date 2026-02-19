import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update identifiers migration', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
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

    afterEach(() => resetActiveProject());
});
