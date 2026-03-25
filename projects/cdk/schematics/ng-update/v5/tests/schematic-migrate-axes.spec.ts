import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update tui-axes', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'removes axisX and axisY attributes',
        migrate({
            template: /* HTML */ `
                <tui-axes
                    axisX="solid"
                    axisY="dashed"
                />
            `,
        }),
    );

    it(
        'adds one to [horizontalLines] and [verticalLines] attributes',
        migrate({
            template: /* HTML */ `
                <tui-axes
                    [horizontalLines]="1"
                    [verticalLines]="2"
                />
            `,
        }),
    );

    it(
        'removes [axisX] and [axisY] attributes and adds one to [horizontalLines] and [verticalLines] attributes for complex template',
        migrate({
            template: /* HTML */ `
                <tui-axes
                    class="axes"
                    [axisX]="axisX"
                    [axisXLabels]="axisXLabels"
                    [axisY]="axisY"
                    [axisYInset]="axisYInset"
                    [axisYLabels]="axisYLabels"
                    [axisYName]="axisYName"
                    [axisYSecondaryInset]="axisYSecondaryInset"
                    [axisYSecondaryLabels]="axisYSecondaryLabels"
                    [axisYSecondaryName]="axisYSecondaryName"
                    [horizontalLines]="horizontalLines"
                    [horizontalLinesHandler]="horizontalLinesHandler"
                    [verticalLines]="labels.length - 1"
                    [verticalLinesHandler]="verticalLinesHandler"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
