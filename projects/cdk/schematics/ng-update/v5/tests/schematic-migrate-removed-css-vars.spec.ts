import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update comment for removed CSS variables', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds comment for removed data-list and textarea variables in styles',
        migrate({
            styles: `
                @import '@taiga-ui/core/styles/taiga-ui-local';

                tui-data-list {
                    --tui-data-list-padding: 0.5rem;
                    --tui-data-list-margin: 0.125rem;
                }

                tui-textarea {
                    --tui-textarea-height: 8rem;
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
