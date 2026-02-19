import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

describe('ng-update migrate packages', () => {
    const collection = join(__dirname, '../../../migration.json');

    it('@taiga-ui/i18n/languages/japan => @taiga-ui/i18n/languages/japanese', async () => {
        const {component} = await runMigration({
            collection,
            component: "import('@taiga-ui/i18n/languages/japan')",
        });

        expect(component).toEqual("import('@taiga-ui/i18n/languages/japanese')");
    });

    afterEach(() => resetActiveProject());
});
