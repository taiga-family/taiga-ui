import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiCarousel', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'moves TuiCarousel import from @taiga-ui/kit to @taiga-ui/legacy and adds TODO',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiCarousel} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    imports: [TuiCarousel],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
