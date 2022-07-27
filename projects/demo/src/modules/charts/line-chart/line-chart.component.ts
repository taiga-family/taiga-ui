import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiContextWithImplicit, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `example-tui-line-chart`,
    templateUrl: `./line-chart.template.html`,
    styleUrls: [`./line-chart.style.less`],
    changeDetection,
})
export class ExampleTuiLineChartComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    readonly yStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        y => `${(10 * y).toLocaleString(`ru-RU`, {maximumFractionDigits: 0})} $`,
    ];

    readonly xStringifyVariants: ReadonlyArray<TuiStringHandler<number>> = [
        x => `${100 * x}`,
    ];

    readonly hintContentVariants: ReadonlyArray<
        PolymorpheusContent<TuiContextWithImplicit<TuiPoint>>
    > = [
        ``,
        ({$implicit}) =>
            `${100 * $implicit[0]}\n${(10 * $implicit[1]).toLocaleString(`ru-RU`, {
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
