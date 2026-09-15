import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update removed CSS classes', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds a TODO for the removed tui-group__auto-width-item class',
        migrate({template: '<div class="my-item tui-group__auto-width-item">x</div>'}),
    );

    it(
        'does not touch a class that merely shares the prefix',
        migrate({template: '<div class="tui-group__item">x</div>'}),
    );

    afterEach(() => resetActiveProject());
});
