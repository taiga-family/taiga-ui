import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-doc-documentation to table[tuiDocAPI]', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tui-doc-documentation tag with table and adds tuiDocAPI attribute',
        migrate({template: '<tui-doc-documentation></tui-doc-documentation>'}),
    );

    it(
        'handles self-closing tui-doc-documentation tag',
        migrate({template: '<tui-doc-documentation />'}),
    );

    afterEach(() => resetActiveProject());
});
