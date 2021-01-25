import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Scss from '!!raw-loader!./examples/1/index.scss';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Scss from '!!raw-loader!./examples/3/index.scss';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import example4Html from '!!raw-loader!./examples/4/index.html';
import example4Scss from '!!raw-loader!./examples/4/index.scss';
import example4Ts from '!!raw-loader!./examples/4/index.ts';
import example5Html from '!!raw-loader!./examples/5/index.html';
import example5Scss from '!!raw-loader!./examples/5/index.scss';
import example5Ts from '!!raw-loader!./examples/5/index.ts';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component} from '@angular/core';
import {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-tui-line-chart',
    templateUrl: './line-chart.template.html',
    styleUrls: ['./line-chart.style.scss'],
    changeDetection,
})
export class ExampleTuiLineChartComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        SCSS: example1Scss,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        SCSS: example2Scss,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        SCSS: example3Scss,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        SCSS: example4Scss,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        SCSS: example5Scss,
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
