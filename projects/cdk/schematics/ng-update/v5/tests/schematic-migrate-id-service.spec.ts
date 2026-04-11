import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiIdService', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment for TuiIdService constructor injection usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiIdService} from '@taiga-ui/cdk';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    constructor(
                        private readonly idService: TuiIdService,
                    ) {}

                    ngOnInit() {
                        const id = this.idService.generateId();
                    }
                }
            `,
        }),
    );

    it(
        'adds TODO comment for inject(TuiIdService) usage',
        migrate({
            component: `
                import {Component, inject} from '@angular/core';
                import {TuiIdService} from '@taiga-ui/cdk';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    private readonly idService = inject(TuiIdService);

                    someMethod() {
                        const id = this.idService.generateId();
                    }
                }
            `,
        }),
    );

    it(
        'adds TODO comment for TuiIdService in constructor with multiple dependencies',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {TuiIdService} from '@taiga-ui/cdk';
                import {OtherService} from './other.service';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    constructor(
                        private readonly idService: TuiIdService,
                        private readonly otherService: OtherService,
                    ) {}
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
