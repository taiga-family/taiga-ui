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
        'should not rename [tuiDropdownOpen] binding paired with tuiDropdown',
        migrate({
            template:
                '<button [tuiDropdown]="content" [tuiDropdownOpen]="open">Open</button>',
        }),
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

    it(
        'replaces tuiDropdownOpen()',
        migrate({
            component: /* TypeScript */ `
                import {tuiDropdownOpen} from '@taiga-ui/core';

                export class Test {
                    protected readonly open = tuiDropdownOpen();
                }
            `,
        }),
    );

    it(
        'keeps chained calls like tuiDropdownOpen().set(true)',
        migrate({
            component: /* TypeScript */ `
                import {tuiDropdownOpen} from '@taiga-ui/core';

                export class Test {
                    protected readonly open = tuiDropdownOpen();

                    public toggle(): void {
                        this.open.set(true);
                    }
                }
            `,
        }),
    );

    it(
        'reuses an existing inject import without duplicating it',
        migrate({
            component: /* TypeScript */ `
                import {inject} from '@angular/core';
                import {TuiDropdownDirective, tuiDropdownOpen} from '@taiga-ui/core';

                export class Test {
                    private readonly directive = inject(TuiDropdownDirective);
                    protected readonly open = tuiDropdownOpen();
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
