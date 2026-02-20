import"./chunk-HU6DUUP4.js";var o=`import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    FormArray,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableFilters} from '@taiga-ui/addon-table';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        ReactiveFormsModule,
        TuiButton,
        TuiInput,
        TuiInputNumber,
        TuiSwitch,
        TuiTable,
        TuiTableFilters,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly testData = [
        {name: 'James', balance: 10000},
        {name: 'Michael', balance: 20000},
        {name: 'Richard', balance: 30000},
        {name: 'Robert', balance: 40000},
        {name: 'Daniel', balance: 50000},
    ] as const;

    protected readonly filterForm = new FormGroup({balance: new FormControl(0)});

    protected readonly array = new FormArray<FormGroup>([]);

    protected readonly items = toSignal(
        this.array.valueChanges.pipe(map(() => [...this.array.controls])),
        {initialValue: []},
    );

    protected testIndex = 0;

    protected readonly columns = ['name', 'balance'];

    public addRow(): void {
        const name = this.testData[this.testIndex]?.name ?? '';
        const balance = this.testData?.[this.testIndex]?.balance ?? 0;

        this.array.push(
            new FormGroup({
                name: new FormControl(name),
                balance: new FormControl(balance, {updateOn: 'blur'}),
            }),
        );
        this.testIndex++;
    }

    protected readonly filter = (
        {balance}: Record<string, FormControl>,
        value: number,
    ): boolean => balance?.value >= value;

    protected onToggle(enabled: boolean): void {
        if (enabled) {
            this.filterForm.enable();
        } else {
            this.filterForm.disable();
        }
    }
}
`;export{o as default};
