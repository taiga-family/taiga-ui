import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {tuiFormatNumber} from '@taiga-ui/core';

@Component({
    selector: `tui-bar-chart-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiBarChartExample2 {
    readonly value = [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ];

    readonly labelsX = [`Jan 2021`, `Feb`, `Mar`];
    readonly labelsY = [`0`, `10 000`];

    readonly hint = ({$implicit}: TuiContextWithImplicit<number>): string =>
        this.value
            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\n`, ``)
            .trim();
}
