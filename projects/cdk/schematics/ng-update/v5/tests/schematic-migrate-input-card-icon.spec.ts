import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update input[tuiInputCard] [icon] (#11917)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes the dropped icon override from input[tuiInputCard] and keeps icon elsewhere',
        migrate({
            template: /* HTML */ `
                <input
                    tuiInputCard
                    [icon]="card"
                />
                <input
                    tuiInputCard
                    icon="visa"
                />
                <input tuiInputCard />
                <tui-icon icon="@tui.user" />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
