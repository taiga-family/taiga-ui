import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'does not crash when templateUrl is a non-literal expression (e.g. config.templateUrl)',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';

                import {config} from './config';

                @Component({
                    selector: '[prmUiTableSortable]',
                    imports: config.imports,
                    templateUrl: config.templateUrl,
                    styleUrls: config.styleUrls,
                    changeDetection: config.changeDetection,
                })
                export class MyComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
