import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update chip and badge selectors', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'replaces tui-chip with span and tuiChip directive',
        migrate({template: '<tui-chip></tui-chip>'}),
    );

    it(
        'preserves attributes on tui-chip',
        migrate({template: '<tui-chip appearance="primary" size="s">Content</tui-chip>'}),
    );

    it(
        'replaces tui-badge with span and tuiBadge directive',
        migrate({template: '<tui-badge></tui-badge>'}),
    );

    it(
        'replaces nav[tuiStepper] with tui-stepper directive',
        migrate({template: '<nav tuiStepper></nav>'}),
    );

    it(
        'preserves attributes and content on tui-badge',
        migrate({
            template:
                '<tui-badge appearance="neutral" size="s"><span>1</span></tui-badge>',
        }),
    );

    it('migrates deprecated appearances for tui-badge', async () => {
        expect(
            await migrate(
                [
                    '<tui-badge appearance="error" size="s"><span>1</span></tui-badge>',
                    '<tui-badge appearance="success" />',
                    '<tui-badge [appearance]="\'error\'"></tui-badge>',
                    '<tui-badge [appearance]="computedAppearance">123</tui-badge>',
                ].join(''),
            ),
        ).toEqual(
            [
                '<span tuiBadge appearance="negative" size="s"><span>1</span></span>',
                '<span tuiBadge appearance="positive" ></span>',
                '<span tuiBadge [appearance]="\'negative\'"></span>',
                "<span tuiBadge [appearance]=\"(computedAppearance) === 'success' ? 'positive' : (computedAppearance) === 'error' ? 'negative' : (computedAppearance)\">123</span>",
            ].join(''),
        );
    });

    afterEach(() => resetActiveProject());
});
