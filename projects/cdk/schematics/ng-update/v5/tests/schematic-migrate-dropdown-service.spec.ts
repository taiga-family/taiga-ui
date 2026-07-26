import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiDropdownService to TuiPopupService', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames imported service and its usages',
        migrate({
            component: /* TypeScript */ `
                import {TuiDropdownService} from '@taiga-ui/core';

                @Component({})
                export class Test {
                    constructor(private readonly dropdowns: TuiDropdownService) {}
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
