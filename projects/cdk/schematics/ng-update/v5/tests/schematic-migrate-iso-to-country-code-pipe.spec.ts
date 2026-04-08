import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

const migrate = createMigration({collection: join(__dirname, '../../../migration.json')});

describe('ng-update migrate TuiIsoToCountryCodePipe', () => {
    it(
        'adds TODO comment for TuiIsoToCountryCodePipe (no automatic rename)',
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
        'adds TODO comment when TuiIsoToCountryCodePipe used in NgModule',
        migrate({
            component: `
                import {TuiIsoToCountryCodePipe} from '@taiga-ui/legacy';

                @NgModule({
                    imports: [TuiIsoToCountryCodePipe],
                })
                export class AppModule {}
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
