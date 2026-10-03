import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update closeable assertions', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces closeable in an `as TuiDialogOptions` assertion',
        migrate({
            component: /* TypeScript */ `
                import type {TuiDialogOptions} from '@taiga-ui/core';

                const options = {closeable: true} as TuiDialogOptions;
            `,
        }),
    );

    it(
        'replaces shorthand closeable in a `satisfies TuiSheetDialogOptions` assertion',
        migrate({
            component: /* TypeScript */ `
                import type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';

                const closeable = true;
                const options = {closeable} satisfies Partial<TuiSheetDialogOptions>;
            `,
        }),
    );

    it(
        'unwraps `as const` before a dialog options assertion',
        migrate({
            component: /* TypeScript */ `
                import type {TuiDialogOptions} from '@taiga-ui/core';

                const options = {closeable: false} as const satisfies TuiDialogOptions;
            `,
        }),
    );

    it(
        'keeps unrelated typed objects unchanged',
        migrate({
            component: /* TypeScript */ `
                import type {TuiDialogOptions} from '@taiga-ui/core';

                interface CustomOptions {
                    closeable: boolean;
                }

                const custom = {closeable: true} satisfies CustomOptions;
                const dialog = {closeable: false} satisfies TuiDialogOptions;
            `,
        }),
    );

    it(
        'unwraps `as const` for an explicitly typed dialog options declaration',
        migrate({
            component: /* TypeScript */ `
                import type {TuiDialogOptions} from '@taiga-ui/core';

                const options: TuiDialogOptions = {closeable: true} as const;
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
