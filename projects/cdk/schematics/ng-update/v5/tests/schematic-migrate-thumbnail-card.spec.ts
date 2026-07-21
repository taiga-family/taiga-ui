import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update thumbnail-card monoHandler (#13869)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
            import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

            @Component({
                templateUrl: './test.html',
                imports: [TuiThumbnailCard],
            })
            export class TestComponent {}
        `,
    });

    it(
        'removes bound [monoHandler] and adds a TODO',
        migrate({
            template: /* HTML */ `
                <tui-thumbnail-card
                    [monoHandler]="monoHandler"
                    [paymentSystem]="system"
                />
            `,
        }),
    );

    it(
        'removes static monoHandler and adds a TODO',
        migrate({
            template: /* HTML */ `
                <tui-thumbnail-card
                    monoHandler
                    [paymentSystem]="system"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
