import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update TuiTextfield to TuiInput', () => {
    describe('template migration', () => {
        async function migrateTemplate(template: string): Promise<string> {
            return (await runMigration({collection, template})).template;
        }

        it('should rename tuiTextfield to tuiInput', async () => {
            expect(await migrateTemplate('<input tuiTextfield />')).toEqual(
                '<input tuiInput />',
            );
        });

        it('should rename tuiTextfield inside tui-textfield tag', async () => {
            expect(
                await migrateTemplate(
                    '<tui-textfield><input tuiTextfield /></tui-textfield>',
                ),
            ).toEqual('<tui-textfield><input tuiInput /></tui-textfield>');
        });
    });

    describe('identifier migration', () => {
        async function migrateComponent(source: string): Promise<string> {
            const {component} = await runMigration({
                component: source,
                collection,
            });

            return component;
        }

        it('should rename TuiTextfield to TuiInput in imports and usages', async () => {
            const result = await migrateComponent(`
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTextfield],
})
export class TestComponent {}
`);

            expect(result).toContain('TuiInput');
            expect(result).not.toContain('TuiTextfield');
        });
    });

    afterEach(() => resetActiveProject());
});
