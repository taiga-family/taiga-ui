import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate packages', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        '@taiga-ui/i18n/languages/japan => @taiga-ui/i18n/languages/japanese',
        migrate({component: "import('@taiga-ui/i18n/languages/japan')"}),
    );

    afterEach(() => resetActiveProject());
});
