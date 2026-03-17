import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({
    collection: join(__dirname, '../../../migration.json'),
});

describe('ng-update migrate TuiToCountryCodePipe', () => {
    it(
        'adds TODO comment for TuiToCountryCodePipe (no automatic rename)',
        migrate({
            component: `
                import {TuiToCountryCodePipe} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiToCountryCodePipe],
                    template: '{{ phone | tuiToCountryCode }}'
                })
                export class TestComponent {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
