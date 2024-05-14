import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTableFilters, TuiTableModule} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipeModule} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiSwitchComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiTableFilters,
        ReactiveFormsModule,
        TuiInputNumberModule,
        TuiSwitchComponent,
        FormsModule,
        TuiTableModule,
        AsyncPipe,
        NgForOf,
        TuiFormatNumberPipeModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly form = new FormGroup({
        balance: new FormControl(0),
    });

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
