import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tui-axes', () => {
    const migrateTemplate = async (template: string): Promise<string> => {
        const {template: result} = await runMigration({
            template,
            collection,
        });

        return result;
    };

    it('removes axisX and axisY attributes', async () => {
        const result = await migrateTemplate(`
                <tui-axes axisX="solid" axisY="dashed" />
            `);
        const expected = `
                <tui-axes   />
            `;

        expect(result).toEqual(expected);
    });

    it('adds one to [horizontalLines] and [verticalLines] attributes', async () => {
        const result = await migrateTemplate(`
                <tui-axes [horizontalLines]="1" [verticalLines]="2" />
            `);
        const expected = `
                <tui-axes [horizontalLines]="2" [verticalLines]="3" />
            `;

        expect(result).toEqual(expected);
    });

    it('removes [axisX] and [axisY] attributes and adds one to [horizontalLines] and [verticalLines] attributes for complex template', async () => {
        const result = await migrateTemplate(`
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
            `);
        const expected = `
                <tui-axes
                    class="axes"
${'                    '}
                    [axisXLabels]="axisXLabels"
${'                    '}
                    [axisYInset]="axisYInset"
                    [axisYLabels]="axisYLabels"
                    [axisYName]="axisYName"
                    [axisYSecondaryInset]="axisYSecondaryInset"
                    [axisYSecondaryLabels]="axisYSecondaryLabels"
                    [axisYSecondaryName]="axisYSecondaryName"
                    [horizontalLines]="(horizontalLines) + 1"
                    [horizontalLinesHandler]="horizontalLinesHandler"
                    [verticalLines]="(labels.length - 1) + 1"
                    [verticalLinesHandler]="verticalLinesHandler"
                />
            `;

        expect(result).toEqual(expected);
    });

    afterEach(() => resetActiveProject());
});
