import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-input-card-group placeholder', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames the deprecated exampleText input to placeholder',
        migrate({
            template: /* HTML */ `
                <tui-input-card-group exampleText="Card number"></tui-input-card-group>
                <tui-input-card-group [exampleText]="text"></tui-input-card-group>
            `,
        }),
    );

    it(
        'preserves other attributes while renaming exampleText',
        migrate({
            template: /* HTML */ `
                <tui-input-card-group
                    autocomplete="cc-number"
                    exampleText="Card number"
                    [cardValidator]="validator"
                ></tui-input-card-group>
            `,
        }),
    );

    it(
        'does not touch exampleText on other elements',
        migrate({
            template: /* HTML */ `
                <tui-input-card-group exampleText="Card number"></tui-input-card-group>
                <div exampleText="unrelated"></div>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
