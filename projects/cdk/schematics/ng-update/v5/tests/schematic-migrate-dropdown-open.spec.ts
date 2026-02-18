import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tuiDropdownOpen to tuiDropdownAuto', () => {
    async function migrateTemplate(template: string): Promise<string> {
        return (await runMigration({collection, template})).template;
    }

    it('should rename tuiDropdownOpen to tuiDropdownAuto', async () => {
        expect(await migrateTemplate('<button tuiDropdownOpen>Open</button>')).toEqual(
            '<button tuiDropdownAuto>Open</button>',
        );
    });

    it('should not rename [tuiDropdownOpen] binding', async () => {
        expect(
            await migrateTemplate('<button [tuiDropdownOpen]="open">Open</button>'),
        ).toEqual('<button [tuiDropdownOpen]="open">Open</button>');
    });

    afterEach(() => resetActiveProject());
});
