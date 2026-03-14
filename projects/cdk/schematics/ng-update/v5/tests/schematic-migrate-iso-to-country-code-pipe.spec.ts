import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate TuiIsoToCountryCodePipe to getCountryCallingCode', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces TuiIsoToCountryCodePipe import with getCountryCallingCode',
        migrate({
            component: `
                import {TuiIsoToCountryCodePipe} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiIsoToCountryCodePipe],
                    template: '{{ isoCode | tuiIsoToCountryCode }}'
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'replaces TuiIsoToCountryCodePipe used programmatically',
        migrate({
            component: `
                import {TuiIsoToCountryCodePipe} from '@taiga-ui/legacy';

                @Injectable()
                export class TestService {
                    private readonly pipe = new TuiIsoToCountryCodePipe(countriesMasks);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
