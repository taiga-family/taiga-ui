import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-pin to div tuiPin', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tui-pin with div and tuiPin directive',
        migrate({template: '<tui-pin></tui-pin>'}),
    );

    it(
        'preserves attributes and content on tui-pin',
        migrate({
            template: '<tui-pin appearance="primary" size="m"><span>1</span></tui-pin>',
        }),
    );

    it('migrates self-closed tui-pin', migrate({template: '<tui-pin/>'}));

    it(
        'moves [open] on tui-pin onto the aliased [tuiPin] input',
        migrate({template: '<tui-pin [open]="open">16</tui-pin>'}),
    );

    it(
        'moves [open] on a tuiPin attribute host onto the aliased [tuiPin] input',
        migrate({
            template:
                '<button tuiPin type="button" [open]="a" (click)="a = !a">1</button>',
        }),
    );

    it(
        'drops a redundant static open on a tuiPin attribute host',
        migrate({template: '<button tuiPin open type="button">1</button>'}),
    );

    afterEach(() => resetActiveProject());
});
