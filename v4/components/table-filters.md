# TableFilters

- **Package**: `ADDON-TABLE`
- **Type**: components

This module allows you to filter table data in a flexible way.

### How to Use (Import)

```ts
import {TuiTableFilters} from '@taiga-ui/addon-table';

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTableFilters,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<table
  tuiTableFilters
  tuiTable
  [columns]="columns"
>
  <thead tuiThead>
    <tr tuiThGroup>
      <th
        *tuiHead="'name'"
        tuiTh
      >
        Name
      </th>
      <th
        *tuiHead="'balance'"
        tuiTh
      >
        <tui-textfield>
          <label tuiLabel>Minimal balance</label>
          <input
            tuiInputNumber
            tuiTableFilter
            [tuiGenericFilter]="filter"
            [formControl]="balance"
          />
        </tui-textfield>
      </th>
    </tr>
  </thead>
  <tbody tuiTbody>
    <tr
      *ngFor="let item of users | tuiTableFilters"
      tuiTr
    >
      <td
        *tuiCell="'name'"
        tuiTd
      >
        {{item.name}}
      </td>
      <td
        *tuiCell="'balance'"
        tuiTd
      >
        {{ item.balance}}
      </td>
    </tr>
  </tbody>
</table>
```

### Usage Examples

#### Basic

**Template:**
```html
<ng-container tuiTableFilters>
<form [formGroup]="form">
<tui-textfield>
<label tuiLabel>Minimal balance</label>
<input formControlName="balance" tuiInputNumber tuiTableFilter="balance" [tuiGenericFilter]="filter" />
</tui-textfield>
<label class="toggle">
<input size="s" tuiSwitch type="checkbox" [ngModel]="form.enabled" [ngModelOptions]="{standalone: true}" [showIcons]="false" (ngModelChange)="onToggle($event)" /> Enable filtering </label>
</form>
<table tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th tuiTh>Name</th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of data | tuiTableFilters | async" tuiTr >
<td *tuiCell="'name'" tuiTd > {{ item.name }} </td>
<td *tuiCell="'balance'" tuiTd > {{ item.balance | tuiFormatNumber | async }} </td>
</tr>
</tbody>
</table>
</ng-container>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable, TuiTableFilters} from '@taiga-ui/addon-table';
import {TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiSwitch,
        TuiTable,
        TuiTableFilters,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
```

**LESS:**
```less
.toggle {
    display: flex;
    align-items: center;
    inline-size: fit-content;
    gap: 1rem;
    margin: 1rem 0;
}

.table {
    inline-size: 100%;
}
```

#### FormArray

**Template:**
```html
<ng-container tuiTableFilters>
<form [formGroup]="filterForm">
<tui-textfield>
<label tuiLabel>Minimal balance</label>
<input formControlName="balance" tuiInputNumber tuiTableFilter="controls" [tuiGenericFilter]="filter" />
</tui-textfield>
<label class="toggle">
<input size="s" tuiSwitch type="checkbox" [ngModel]="filterForm.enabled" [ngModelOptions]="{standalone: true}" [showIcons]="false" (ngModelChange)="onToggle($event)" /> Enable filtering </label>
</form>
<table tuiTable class="table" [columns]="columns" >
<thead>
<tr tuiThGroup>
<th tuiTh>Name</th>
<th tuiTh>Balance</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of items() | tuiTableFilters | async" tuiTr [formGroup]="item" >
<td *tuiCell="'name'" tuiTd >
<tui-textfield>
<input autocomplete="name" formControlName="name" placeholder="Type an name" tuiTextfield />
</tui-textfield>
</td>
<td *tuiCell="'balance'" tuiTd >
<tui-textfield>
<input formControlName="balance" placeholder="Type a balance" tuiInputNumber />
</tui-textfield>
</td>
</tr>
</tbody>
</table>
<button tuiButton type="button" class="tui-space_top-2" (click)="addRow()" > Add </button>
</ng-container>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
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
import {TuiButton, TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiSwitch} from '@taiga-ui/kit';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiFormatNumberPipe,
        TuiInputNumber,
        TuiSwitch,
        TuiTable,
        TuiTableFilters,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

    protected readonly filterForm = new FormGroup({
        balance: new FormControl(0),
    });

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
```

**LESS:**
```less
.toggle {
    display: flex;
    align-items: center;
    inline-size: fit-content;
    gap: 1rem;
    margin: 1rem 0;
}

.table {
    inline-size: 100%;
}
```
