import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiAlertService to TuiNotificationService', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'renames imported service and its usages',
        migrate({
            component: `
                import {TuiAlertService} from '@taiga-ui/core';

                @Component({})
                export class Test {
                    constructor(private readonly alerts: TuiAlertService) {}

                    public show(): void {
                        this.alerts.open('Hello');
                    }
                }
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
