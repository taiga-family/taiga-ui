import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate TuiToCountryCodePipe to maskitoGetCountryFromNumber', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces TuiToCountryCodePipe import with maskitoGetCountryFromNumber',
        migrate({
            component: `
                import {TuiToCountryCodePipe} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    imports: [TuiToCountryCodePipe],
                    template: '{{ phone | tuiToCountryCode:countries }}'
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'replaces TuiToCountryCodePipe used programmatically',
        migrate({
            component: `
                import {TuiToCountryCodePipe} from '@taiga-ui/legacy';

                @Injectable()
                export class TestService {
                    private readonly pipe = new TuiToCountryCodePipe(countriesMasks);
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
