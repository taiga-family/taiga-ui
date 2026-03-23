import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate tui-pagination size', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'adds TODO comment and removes size="s" from tui-pagination',
        migrate({template: '<tui-pagination size="s" />'}),
    );

    it(
        'does not add TODO comment when no size attribute',
        migrate({
            template: `
                <tui-pagination
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />
            `,
        }),
    );

    it(
        'adds TODO comment and removes [size] binding from tui-pagination',
        migrate({
            template: `
                <tui-pagination
                    [size]="'s'"
                    [index]="10"
                    [length]="64"
                    [sidePadding]="sidePadding"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
