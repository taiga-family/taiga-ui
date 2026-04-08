import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-pin tag to div tuiPin', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tui-pin with div and tuiPin directive',
        migrate({template: '<tui-pin></tui-pin>'}),
    );

    it(
        'preserves attributes and content on tui-pin',
        migrate({
            template: '<tui-pin appearance="primary" size="m"><span>1</span></tui-pin>',
        }),
    );

    it('migrates self-closed tui-pin', migrate({template: '<tui-pin/>'}));

    afterEach(() => resetActiveProject());
});
