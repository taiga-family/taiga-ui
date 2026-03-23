import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update v5: migrate mixins', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should migrate slider-ticks-labels mixin in LESS',
        migrate({
            styles: `
                @import '@taiga-ui/core/styles/taiga-ui-local';

                .ticks-labels {
                    .tui-slider-ticks-labels(l);
                }

                .another-class {
                    .tui-slider-ticks-labels(m);
                    color: red;
                }

                .with-important {
                    .tui-slider-ticks-labels(s) !important;
                }

                .already-migrated {
                    .tui-slider-ticks-labels();
                }
            `,
        }),
    );

    it(
        'should migrate slider-ticks-labels mixin with SCSS @include syntax',
        migrate({
            styles: `
                @import '@taiga-ui/core/styles/taiga-ui-local.less';

                .ticks-labels {
                    @include tui-slider-ticks-labels(l);
                }

                .another-class {
                    @include tui-slider-ticks-labels(m);
                }
            `,
        }),
    );

    afterEach(() => {
        resetActiveProject();
    });
});
