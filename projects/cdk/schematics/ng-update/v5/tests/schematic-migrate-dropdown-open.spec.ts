import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tuiDropdownOpen to tuiDropdownAuto', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should rename tuiDropdownOpen to tuiDropdownAuto',
        migrate({template: '<button tuiDropdownOpen>Open</button>'}),
    );

    it(
        'should not rename [tuiDropdownOpen] binding',
        migrate({template: '<button [tuiDropdownOpen]="open">Open</button>'}),
    );

    it(
        'should rename tuiDropdownMobile to tuiDropdownSheet',
        migrate({template: '<button tuiDropdownMobile="selector">Open</button>'}),
    );

    it(
        'should rename [tuiSheet] to [tuiSheetDialog]',
        migrate({template: '<button [tuiSheet]="content">Open</button>'}),
    );

    it(
        'should rename tuiSheetOptions to tuiSheetDialogOptions',
        migrate({
            template: '<button [tuiSheet]="content" tuiSheetOptions="opts">Open</button>',
        }),
    );

    it(
        'should rename *tuiDataList to *tuiDropdown',
        migrate({template: '<tui-data-list-wrapper *tuiDataList [items]="items" />'}),
    );

    afterEach(() => resetActiveProject());
});
