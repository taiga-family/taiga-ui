# Search

- **Package**: `LAYOUT`
- **Type**: components

A wrapping component for search or filtering the table

### How to Use (Import)

```ts
import {TuiSearch} from '@taiga-ui/layout';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSearch,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<search tuiSearch>
  <form [formGroup]="form">
    <fieldset>
      <tui-textfield iconStart="@tui.search">
        <label tuiLabel>Search</label>
        <input
          placeholder="Search"
          tuiTextfield
          formControlName="search"
        />
      </tui-textfield>
      <button tuiButton>Search</button>
    </fieldset>
  </form>
</search>
```

### Usage Examples

#### Filters

**Template:**
```html
<search tuiSearch>
<form [formGroup]="form">
<fieldset formArrayName="filters">
<tui-search-filters> Filters <button tuiButton type="reset" > Reset </button>
<ng-container *ngFor="let control of filters.controls; let i = index">
<tui-textfield *tuiItem>
<label tuiLabel>Filter {{ i + 1 }}</label>
<input placeholder="Search" tuiTextfield [formControlName]="i" />
</tui-textfield>
</ng-container>
</tui-search-filters>
<button tuiButton type="button" > Search </button>
</fieldset>
</form>
</search>
<p>
<code>{{ form.value | json }}</code>
</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiItemsWithMore,
        TuiSearch,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly filters = new FormArray(
        Array.from({length: 5}, () => new FormControl()),
    );

    protected readonly form = new FormGroup({filters: this.filters});
    protected readonly controls = EMPTY_QUERY;
}
```

#### Small

**Template:**
```html
<search tuiSearch>
<form [formGroup]="form">
<fieldset tuiTextfieldSize="s">
<tui-textfield iconStart="@tui.search">
<input formControlName="search" placeholder="Search" tuiTextfield />
</tui-textfield>
<tui-textfield tuiChevron>
<select formControlName="select" placeholder="User" tuiTextfield ></select>
<tui-data-list-wrapper *tuiTextfieldDropdown [items]="items" />
</tui-textfield>
<button size="s" tuiButton type="button" > Search </button>
</fieldset>
<fieldset>
<tui-segmented>
<label *ngFor="let segment of segments">
<input formControlName="segmented" type="radio" [value]="segment" /> {{ segment || 'All' }} </label>
</tui-segmented>
<tui-filter formControlName="filter" size="s" [items]="filters" /> Results: 999 <hr />
<label tuiLabel>
<input formControlName="switch" tuiSwitch type="checkbox" /> Assigned to me </label>
<hr />
<button appearance="flat" iconStart="@tui.rotate-cw" size="xs" tuiButton type="reset" [disabled]="!count()" > Clear {{ count() ? '(' + count() + ')' : '' }} </button>
<button iconStart="@tui.cloud-download" tuiLink type="button" [style.margin-inline-start]="'auto'" > Download </button>
</fieldset>
</form>
</search>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCountFilledControls} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilter,
    TuiSegmented,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';
import {map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilter,
        TuiLink,
        TuiSearch,
        TuiSegmented,
        TuiSwitch,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        search: new FormControl(),
        select: new FormControl(),
        date: new FormControl(),
        switch: new FormControl(),
        filter: new FormControl(),
        segmented: new FormControl(),
    });

    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly filters = ['Python', 'JavaScript', 'TypeScript'];
    protected readonly segments = [null, 'Unread', 'Archived'];

    protected readonly count = toSignal(
        this.form.valueChanges.pipe(map(() => tuiCountFilledControls(this.form))),
        {initialValue: 0},
    );
}
```
