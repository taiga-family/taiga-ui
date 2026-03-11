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

    it('should rename tuiDropdownMobile to tuiDropdownSheet', async () => {
        expect(
            await migrateTemplate('<button tuiDropdownMobile="selector">Open</button>'),
        ).toEqual('<button tuiDropdownSheet="selector">Open</button>');
    });

    it('should rename [tuiSheet] to [tuiSheetDialog]', async () => {
        expect(
            await migrateTemplate('<button [tuiSheet]="content">Open</button>'),
        ).toEqual('<button [tuiSheetDialog]="content">Open</button>');
    });

    it('should rename tuiSheetOptions to tuiSheetDialogOptions', async () => {
        expect(
            await migrateTemplate(
                '<button [tuiSheet]="content" tuiSheetOptions="opts">Open</button>',
            ),
        ).toEqual(
            '<button [tuiSheetDialog]="content" tuiSheetDialogOptions="opts">Open</button>',
        );
    });

    it('should rename *tuiDataList to *tuiDropdown', async () => {
        expect(
            await migrateTemplate(
                '<tui-data-list-wrapper *tuiDataList [items]="items" />',
            ),
        ).toEqual('<tui-data-list-wrapper *tuiDropdown [items]="items" />');
    });

    afterEach(() => resetActiveProject());
});
