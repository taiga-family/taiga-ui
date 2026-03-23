import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update layout components from kit to layout', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates TuiSlides import from @taiga-ui/kit to @taiga-ui/layout',
        migrate({
            component: `
                import {TuiSlides} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    slides = ['Slide 1', 'Slide 2'];
                }
            `,
        }),
    );

    it(
        'migrates TuiElasticContainer import from @taiga-ui/kit to @taiga-ui/layout',
        migrate({
            component: `
                import {TuiElasticContainer} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    elastic = true;
                }
            `,
        }),
    );

    it(
        'migrates TuiFloatingContainer import from @taiga-ui/kit to @taiga-ui/layout',
        migrate({
            component: `
                import {TuiFloatingContainer} from '@taiga-ui/kit';

                @Component({})
                export class Test {
                    floating = false;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
