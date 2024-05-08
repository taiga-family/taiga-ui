import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxesComponent, TuiBarChartComponent} from '@taiga-ui/addon-charts';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiFormatNumber, TuiHintModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiAxesComponent,
        TuiBarChartComponent,
        TuiSelectModule,
        FormsModule,
        TuiDataListWrapperModule,
        TuiHintModule,
        TuiAxesComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly value = [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ];

    protected readonly labelsX = ['Jan 2021', 'Feb', 'Mar'];
    protected readonly labelsY = ['0', '10 000'];
    protected readonly appearances = ['dark', 'error'];

    protected appearance = this.appearances[0];

    protected readonly hint = ({$implicit}: TuiContext<number>): string =>
        this.value
            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\n`, '')
            .trim();
}
