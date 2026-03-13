import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update migrate platform browser flags', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates browser flags from @taiga-ui/cdk to @ng-web-apis/platform',
        migrate({
            component: `
                import {tuiIsEdge, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

                export const flags = [tuiIsEdge, tuiIsFirefox, tuiIsSafari];
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
