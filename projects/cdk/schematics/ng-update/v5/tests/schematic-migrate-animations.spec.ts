import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update Angular animations warning', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO for tuiFadeIn usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {tuiFadeIn} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                    animations: [tuiFadeIn],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO for tuiSlideInTop usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {tuiSlideInTop} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                    animations: [tuiSlideInTop],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO for multiple animations in one import',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {tuiFadeIn, tuiHeightCollapse, tuiScaleIn} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                    animations: [tuiFadeIn, tuiHeightCollapse, tuiScaleIn],
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'adds TODO for TuiDurationOptions type usage',
        migrate({
            component: `
                import {Component} from '@angular/core';
                import {type TuiDurationOptions} from '@taiga-ui/core';

                @Component({
                    templateUrl: './test.html',
                })
                export class TestComponent {
                    readonly options: TuiDurationOptions = {value: '', params: {duration: 300}};
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
