import"./chunk-HU6DUUP4.js";var a=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableFilters} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        ReactiveFormsModule,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiSwitch,
        TuiTable,
        TuiTableFilters,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({balance: new FormControl(0)});

    protected readonly data = [
        {name: 'Alex Inkin', balance: 1323525},
        {name: 'Roman Sedov', balance: 523242},
        {name: 'Vladimir Potekhin', balance: 645465},
        {name: 'Nikita Barsukov', balance: 468468},
        {name: 'Maxim Ivanov', balance: 498654},
    ] as const;

    protected readonly columns = Object.keys(this.data[0]);

    protected readonly filter = (item: number, value: number): boolean => item >= value;

    protected onToggle(enabled: boolean): void {
        if (enabled) {
            this.form.enable();
        } else {
            this.form.disable();
        }
    }
}
`;export{a as default};
