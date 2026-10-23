# Search

- **Package**: `LAYOUT`
- **Type**: components

A wrapping component for search or filtering the table

### Usage Examples

#### Filters

**Template:**
```html
<search tuiSearch>
<form [formGroup]="form">
<fieldset formArrayName="filters">
<tui-search-filters> Filters <button tuiButton type="reset" > Reset </button> @for (control of filters.controls; track control) { <tui-textfield *tuiItem>
<label tuiLabel>Filter {{ $index + 1 }}</label>
<input placeholder="Search" tuiInput [formControlName]="$index" />
</tui-textfield> } </tui-search-filters>
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
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';

@Component({
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiButton,
        TuiInput,
        TuiItemsWithMore,
        TuiSearch,
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
}
```

#### Small

**Template:**
```html
<search tuiSearch>
<form [formGroup]="form">
<fieldset tuiTextfieldSize="s">
<tui-textfield iconStart="@tui.search">
<input formControlName="search" placeholder="Search" tuiInput />
</tui-textfield>
<tui-textfield tuiChevron>
<input formControlName="select" placeholder="User" tuiSelect />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
<button size="s" tuiButton type="button" > Search </button>
</fieldset>
<fieldset>
<tui-segmented> @for (segment of segments; track segment) { <label>
<input formControlName="segmented" type="radio" [value]="segment" /> {{ segment || 'All' }} </label> } </tui-segmented>
<tui-filter formControlName="filter" size="s" [items]="filters" /> Results: 999 <hr />
<label tuiLabel>
<input formControlName="switch" tuiSwitch type="checkbox" /> Assigned to me </label>
<hr />
<button appearance="flat" iconStart="@tui.rotate-cw" size="xs" tuiButton type="reset" [disabled]="!count()" > Clear {{ count() ? `(${count()})` : '' }} </button>
<button iconStart="@tui.cloud-download" tuiLink type="button" [style.margin-inline-start]="'auto'" > Download </button>
</fieldset>
</form>
</search>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCountFilledControls} from '@taiga-ui/cdk';
import {TuiButton, TuiInput, TuiLink} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilter,
    TuiSegmented,
    TuiSelect,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiSearch} from '@taiga-ui/layout';
import {map} from 'rxjs';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilter,
        TuiInput,
        TuiLink,
        TuiSearch,
        TuiSegmented,
        TuiSelect,
        TuiSwitch,
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
