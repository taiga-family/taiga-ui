import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiPortalService', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    describe('TuiVCR — #viewContainer → tuiVCR directive', () => {
        it(
            'replaces #viewContainer template variable with tuiVCR directive',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {TuiPortals} from '@taiga-ui/cdk';
                    import {CustomPortalService} from './service';

                    @Component({
                        standalone: true,
                        selector: 'custom-host',
                        template: '<ng-container #viewContainer />',
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class CustomHost extends TuiPortals {}
                `,
            }),
        );

        it(
            'adds TuiVCR to imports array when #viewContainer is migrated',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {TuiPortals} from '@taiga-ui/cdk';

                    @Component({
                        standalone: true,
                        selector: 'custom-host',
                        template: '<ng-container #viewContainer />',
                        imports: [],
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class CustomHost extends TuiPortals {}
                `,
            }),
        );

        it(
            'does not change #viewContainer in component not extending TuiPortals',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';

                    @Component({
                        standalone: true,
                        selector: 'regular-component',
                        template: '<ng-container #viewContainer />',
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class RegularComponent {}
                `,
            }),
        );

        it(
            'replaces #viewContainer with tuiVCR in external template of TuiPortals subclass',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {TuiPortals} from '@taiga-ui/cdk';
                    import {CustomPortalService} from './service';

                    @Component({
                        standalone: true,
                        selector: 'custom-host',
                        templateUrl: './test.html',
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class CustomHost extends TuiPortals {}
                `,
                template: '<ng-container #viewContainer />',
            }),
        );

        it(
            'adds TuiVCR to imports array when #viewContainer is migrated in external template',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';
                    import {TuiPortals} from '@taiga-ui/cdk';

                    @Component({
                        standalone: true,
                        selector: 'custom-host',
                        templateUrl: './test.html',
                        imports: [],
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class CustomHost extends TuiPortals {}
                `,
                template: '<ng-container #viewContainer />',
            }),
        );

        it(
            'does not change #viewContainer in external template of non-TuiPortals component',
            migrate({
                component: `
                    import {ChangeDetectionStrategy, Component} from '@angular/core';

                    @Component({
                        standalone: true,
                        selector: 'regular-component',
                        templateUrl: './test.html',
                        changeDetection: ChangeDetectionStrategy.OnPush,
                    })
                    export class RegularComponent {}
                `,
                template: '<ng-container #viewContainer />',
            }),
        );
    });

    afterEach(() => resetActiveProject());
});
