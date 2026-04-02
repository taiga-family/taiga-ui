import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-loader showLoader to loading', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should rename showLoader to loading on tui-loader',
        migrate({template: '<tui-loader showLoader>content</tui-loader>'}),
    );

    it(
        'should rename [showLoader] binding to [loading] on tui-loader',
        migrate({template: '<tui-loader [showLoader]="isLoading">content</tui-loader>'}),
    );

    it(
        'should not rename showLoader on other elements',
        migrate({template: '<div showLoader>content</div>'}),
    );

    afterEach(() => resetActiveProject());
});
