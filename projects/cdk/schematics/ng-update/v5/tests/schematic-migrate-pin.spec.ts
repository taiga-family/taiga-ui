import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tui-pin tag to div tuiPin', () => {
    async function migrate(template: string): Promise<string> {
        const {template: result} = await runMigration({
            template,
            collection,
            component: `
                import {Component} from '@angular/core';

                @Component({
                    templateUrl: './test.html',
                })
                export class Test {}
            `,
        });

        return result;
    }

    it('replaces tui-pin with div and tuiPin directive', async () => {
        expect(await migrate('<tui-pin></tui-pin>')).toEqual('<div tuiPin></div>');
    });

    it('preserves attributes and content on tui-pin', async () => {
        expect(
            await migrate(
                '<tui-pin appearance="primary" size="m"><span>1</span></tui-pin>',
            ),
        ).toEqual('<div tuiPin appearance="primary" size="m"><span>1</span></div>');
    });

    it('migrates self-closed tui-pin', async () => {
        expect(await migrate('<tui-pin/>')).toEqual('<div tuiPin></div>');
    });

    afterEach(() => resetActiveProject());
});
