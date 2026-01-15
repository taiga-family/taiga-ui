import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update TuiAlertService to TuiNotificationService', () => {
    async function migrate(source: string): Promise<string> {
        const {component} = await runMigration({
            component: source,
            collection,
        });

        return component;
    }

    it('renames imported service and its usages', async () => {
        const before = `
import {TuiAlertService} from '@taiga-ui/core';

@Component({})
export class Test {
    constructor(private readonly alerts: TuiAlertService) {}

    public show(): void {
        this.alerts.open('Hello');
    }
}
        `;

        const result = await migrate(before);

        expect(result).toContain('TuiNotificationService');
        expect(result).not.toContain('TuiAlertService');
    });

    afterEach(() => resetActiveProject());
});
