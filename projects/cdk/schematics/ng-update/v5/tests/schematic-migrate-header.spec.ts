import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update dynamic tuiHeader (#13869)', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: /* TypeScript */ `
            import {TuiHeader} from '@taiga-ui/layout';

            @Component({
                templateUrl: './test.html',
                imports: [TuiHeader],
            })
            export class TestComponent {}
        `,
    });

    it(
        'adds a TODO for a dynamic [tuiHeader] carrying old size tokens',
        migrate({
            template: /* HTML */ "<h1 [tuiHeader]=\"isMobile() ? 'l' : 'm'\">Title</h1>",
        }),
    );

    it(
        'migrates a single bound literal without adding a TODO',
        migrate({
            template: /* HTML */ `
                <h1 [tuiHeader]="'l'">Title</h1>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
