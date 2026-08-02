import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update EMPTY_ARRAY', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces EMPTY_ARRAY usages with [] and drops the @taiga-ui/cdk import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {EMPTY_ARRAY, TuiDay} from '@taiga-ui/cdk';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected readonly all = EMPTY_ARRAY;

                    protected readonly handler = (day: TuiDay) =>
                        day.isWeekend ? EMPTY_ARRAY : [1];
                }
            `,
        }),
    );

    it(
        'handles the @taiga-ui/cdk/constants sub-path import',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {EMPTY_ARRAY} from '@taiga-ui/cdk/constants';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    protected readonly value = EMPTY_ARRAY;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
