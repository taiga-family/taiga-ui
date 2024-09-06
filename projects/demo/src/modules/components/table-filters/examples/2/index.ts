import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {
    FormArray,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import {TuiTable, TuiTableFilters} from '@taiga-ui/addon-table';
import {TuiButton, TuiFormatNumberPipe, TuiTextfieldComponent} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {map} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        TuiFormatNumberPipe,
        TuiInputNumberModule,
        TuiSwitch,
        TuiTable,
        TuiTableFilters,
        TuiInputModule,
        TuiTextfieldComponent,
        TuiButton,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly filterForm = new FormGroup({
        balance: new FormControl(0),
    });

    protected readonly array = new FormArray<FormGroup>([]);

    protected readonly items = toSignal(
        this.array.valueChanges.pipe(map(() => [...this.array.controls])),
        {initialValue: []},
    );

    private testData = [
        {name: 'James', balance: 10000},
        {name: 'Michael', balance: 20000},
        {name: 'Richard', balance: 30000},
        {name: 'Robert', balance: 40000},
        {name: 'Daniel', balance: 50000},
    ] as const;

    protected testIndex = 0;

    protected readonly columns = ['name', 'balance'];

    protected readonly filter = (group: {balance: FormControl}, value: number) =>
        group.balance.value >= value;

    addRow() {
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

    protected onToggle(enabled: boolean): void {
        if (enabled) {
            this.filterForm.enable();
        } else {
            this.filterForm.disable();
        }
    }
}
