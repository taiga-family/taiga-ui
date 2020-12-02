import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Less from '!!raw-loader!./examples/3/index.less';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as example4Html from '!!raw-loader!./examples/4/index.html';
import * as example4Less from '!!raw-loader!./examples/4/index.less';
import * as example4Ts from '!!raw-loader!./examples/4/index.ts';

import * as example5Html from '!!raw-loader!./examples/5/index.html';
import * as example5Less from '!!raw-loader!./examples/5/index.less';
import * as example5Ts from '!!raw-loader!./examples/5/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-line-chart',
    templateUrl: './line-chart.template.html',
    styleUrls: ['./line-chart.style.less'],
    changeDetection,
})
export class ExampleTuiLineChartComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly value = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString('ru-RU', {maximumFractionDigits: 0})} $`,
    ];

    readonly xStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        x => `${100 * x}`,
    ];

    readonly hintContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<[number, number]>>
    > = [
        '',
        ({$implicit}) =>
            `${100 * $implicit[0]}\n${(10 * $implicit[1]).toLocaleString('ru-RU', {
                maximumFractionDigits: 0,
            })} $`,
    ];

    yStringify: TuiStringHandler<number> | null = null;

    xStringify: TuiStringHandler<number> | null = null;

    hintContent = this.hintContentVariants[0];

    x = 0;

    y = 0;

    width = 400;

    height = 200;

    smoothingFactor = 0;

    filled = false;

    dots = false;
}
