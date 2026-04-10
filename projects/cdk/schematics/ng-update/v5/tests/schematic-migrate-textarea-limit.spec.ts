import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiTextareaLimit', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes TuiTextareaLimit import when TuiTextarea is already present',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiTextarea, TuiTextareaLimit} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    imports: [TuiTextarea, TuiTextareaLimit],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'removes standalone TuiTextareaLimit import',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiTextareaLimit} from '@taiga-ui/kit';

                @Component({
                    standalone: true,
                    imports: [TuiTextareaLimit],
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
