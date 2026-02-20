import"./chunk-HU6DUUP4.js";var r=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLink, type TuiSizeXXL, type TuiSizeXXS} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [RouterLink, TuiDemo, TuiLink, TuiProgress],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly routes = DemoRoute;
    protected value = 3;
    protected max = 5;
    protected segments = this.max;

    protected examples = ['Basic', 'Sizes', 'Colors', 'With labels', 'No round corners'];

    protected readonly sizeVariants: ReadonlyArray<TuiSizeXXL | TuiSizeXXS> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    protected size: TuiSizeXXL | TuiSizeXXS = this.sizeVariants[2]!;

    protected readonly colorsVariants: readonly string[][] = [
        ['var(--tui-background-accent-1)'],
        ['#39b54a', '#ffd450', '#ffd450', '#fcc521', '#fab619', '#f8a34d', '#e01f19'],
        Array.from(
            {length: 20},
            (_, index) => \`var(--tui-chart-categorical-0\${index + 1})\`,
        ),
    ];

    protected colors: string[] = this.colorsVariants[0] ?? [];

    protected get computedColors(): string[] {
        return this.colors.slice(0, this.segments);
    }
}
`;export{r as default};
