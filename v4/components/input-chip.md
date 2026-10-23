# InputChip

- **Package**: `KIT`
- **Type**: components

`InputChip` uses specifically modified Textfield to represent array of selectable items.

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputChip,
  ],
})
export class Example {
  value = [];
}
```

### How to Use (Template)

```html
<tui-textfield multi>
  <input
    tuiInputChip
    [(ngModel)]="value"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield multi [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [rows]="textfieldDoc.rows" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Enter" tuiInputChip [formControl]="control" [invalid]="controlDoc.invalid" [readOnly]="controlDoc.readonly" [separator]="separator" [tuiDisabled]="controlDoc.disabled" [unique]="unique" />
<tui-input-chip *tuiItem />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [unique] | `boolean` | Ability to enter unique or non-unique tags |
| [separator] | `string` | String or RegExp to separate tags |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield multi [rows]="1" >
<label tuiLabel>Plain strings</label>
<input placeholder="Placeholder" tuiInputChip [separator]="separator" [(ngModel)]="value" />
</tui-textfield>
<tui-textfield multi>
<label tuiLabel>Growing height</label>
<input placeholder="Placeholder" tuiInputChip [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = inject('Pythons' as any);
    public readonly separator = /[\s,;]/;
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 19rem;
    flex-direction: column;
    gap: 1rem;
}
```

#### Chips

**Template:**
```html
<tui-textfield multi tuiTextfieldSize="l" >
<input placeholder="Enter" tuiInputChip [unique]="false" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
<tui-textfield multi tuiTextfieldSize="m" >
<input placeholder="Enter" tuiInputChip [unique]="false" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
<tui-textfield multi tuiTextfieldSize="s" >
<input placeholder="Enter" tuiInputChip [unique]="false" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = ['I', 'love', 'Angular'];
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 19rem;
    flex-direction: column;
    gap: 1rem;
}
```

#### Disabled items

**Template:**
```html
<tui-textfield multi [disabledItemHandler]="handler" [style.width.rem]="19" [tuiTextfieldCleaner]="false" >
<input tuiInputChip [formControl]="control" />
<button *ngIf="control.value.length > 2" appearance="icon" iconStart="@tui.x" size="xs" tabindex="-1" tuiIconButton type="button" (click)="control.setValue(this.required)" > Clear </button>
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, ReactiveFormsModule, TuiButton, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly required = ['Required', 'Obligatory'];

    protected readonly control = new FormControl(this.required.concat('Removable'), {
        nonNullable: true,
    });

    protected readonly handler: TuiBooleanHandler<string> = (item) =>
        this.required.includes(item);
}
```

#### MultiSelect

**Template:**
```html
<label tuiLabel> Arbitrary strings with suggestions <tui-textfield multi>
<input placeholder="Type something" tuiInputChip [(ngModel)]="arbitrary" />
<tui-input-chip *tuiItem />
<ng-container *ngIf="items | tuiHideSelected | tuiFilterByInput as items">
<ng-template *ngIf="items.length" tuiTextfieldDropdown >
<tui-data-list-wrapper [items]="items" />
</ng-template>
</ng-container>
</tui-textfield>
</label>
<label tuiLabel> Only allowing items from the list and hiding values when not focused behind a custom content <tui-textfield #input multi [content]="!input.focused() && pythons.length ? 'Selected ' + pythons.length + ' out of ' + items.length : ''" [disabledItemHandler]="disabled" >
<label tuiLabel>Select Pythons</label>
<input tuiInputChip [placeholder]="pythons.length ? '' : 'Type for suggestions'" [(ngModel)]="pythons" />
<ng-template *ngIf="!input.focused()" tuiItem />
<ng-container *ngIf="items | tuiHideSelected | tuiFilterByInput as items">
<ng-template *ngIf="items.length" tuiTextfieldDropdown >
<tui-data-list-wrapper [items]="items" />
</ng-template>
</ng-container>
</tui-textfield>
</label>
<label tuiLabel> Using checkboxes in the dropdown and making the textfield non-writable <tui-textfield multi tuiChevron >
<label tuiLabel>Multi Select</label>
<input tuiInputChip tuiSelectLike [placeholder]="multi.length ? '' : 'Pick from the list'" [(ngModel)]="multi" />
<tui-data-list-wrapper *tuiTextfieldDropdown new tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</label>
<label tuiLabel> Conditional input in textfield <tui-textfield multi tuiChevron >
<label tuiLabel>Multi Select with if/else</label>
<input *ngIf="filter; else readonly" tuiInputChip [placeholder]="conditionalMulti.length ? '' : 'Pick from the list'" [(ngModel)]="conditionalMulti" />
<ng-template #readonly>
<input tuiInputChip tuiSelectLike [placeholder]="conditionalMulti.length ? '' : 'Pick from the list'" [(ngModel)]="multi" />
</ng-template>
<tui-data-list-wrapper *tuiTextfieldDropdown new tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</label>
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="filter" /> Toggle filter </label>
<label tuiLabel> Working with objects <tui-textfield multi tuiChevron [disabledItemHandler]="strings" [stringify]="stringify" >
<input tuiInputChip [placeholder]="objects.length ? '' : 'Picking objects'" [(ngModel)]="objects" />
<tui-input-chip *tuiItem />
<tui-data-list *tuiTextfieldDropdown>
<tui-opt-group label="Pythons" tuiMultiSelectGroup >
<button *ngFor="let user of users | tuiFilterByInput" new tuiOption [value]="user" > {{ user.name }} </button>
</tui-opt-group>
<tui-opt-group label="Collaborators" tuiMultiSelectGroup >
<button *ngFor="let user of more | tuiFilterByInput" new tuiOption [value]="user" > {{ user.name }} </button>
</tui-opt-group>
</tui-data-list>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiDataList, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiCheckbox,
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiHideSelectedPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiHideSelectedPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected arbitrary: string[] = [];
    protected pythons: string[] = [];
    protected multi: string[] = [];
    protected conditionalMulti: string[] = [];
    protected objects: User[] = [];

    protected filter = false;

    protected readonly items: string[] = inject('Pythons' as any);
    protected readonly users = this.items.map((name, index) => ({name, index}));
    protected readonly more = [
        {name: 'Carol Cleveland', index: -1},
        {name: 'Neil Innes', index: -2},
    ];

    protected readonly strings = tuiIsString;
    protected readonly stringify = ({name}: User): string => name;
    protected readonly disabled = (item: string): boolean => !this.items.includes(item);
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 19rem;
    flex-direction: column;
    gap: 1rem;
}
```

#### Customization

**Template:**
```html
<tui-textfield iconStart="@tui.heart" multi [style.width.rem]="19" >
<input tuiInputChip [formControl]="control" [placeholder]="!control.value?.length ? 'Type something' : ''" />
<tui-icon tuiTooltip="Only small words" />
<tui-input-chip *tuiItem="let context" [appearance]="context.item.length > 5 ? 'negative' : 'positive'" [editable]="false" [iconStart]="context.item.length > 5 ? '@tui.info' : ''" [tuiHint]="context.item.length > 5 ? 'Please keep it under 6 chars' : ''" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiHint,
        TuiIcon,
        TuiInputChip,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(['Keep', 'it', 'simple']);
}
```

#### Mask

**Template:**
```html
<tui-textfield filler="•••" multi [style.width.rem]="19" >
<input placeholder="Type 3 digits" tuiInputChip [formControl]="control" [maskito]="mask" />
<tui-input-chip *tuiItem [maskito]="mask" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [MaskitoDirective, ReactiveFormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
    protected readonly mask: MaskitoOptions = {
        mask: [/\d/, /\d/, /\d/],
    };
}
```

#### Direction

**Template:**
```html
<tui-textfield multi [rows]="1" >
<label tuiLabel>كلمات عربية</label>
<input placeholder="مرحبا" tuiInputChip [(ngModel)]="value" />
</tui-textfield>
<tui-textfield multi [rows]="1" >
<input placeholder="مرحبا" tuiInputChip [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
<tui-textfield multi [rows]="2" >
<input placeholder="مرحبا" tuiInputChip [(ngModel)]="value" />
<tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputChip, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {
        dir: 'rtl',
    },
})
export default class Example {
    protected value = [
        'حبيبي',
        'صباح الخير',
        'من فضلك',
        'شكرا',
        'أنا آسف',
        'تصبح على خير',
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 19rem;
}
```

#### Mobile

**Template:**
```html
<label tuiLabel> Mobile dropdown with writable input <tui-textfield multi tuiChevron tuiDropdownMobile [disabledItemHandler]="disabled" >
<input placeholder="Type something" tuiInputChip [(ngModel)]="writable" />
<ng-template *ngIf="items | tuiFilterByInput as items" let-close tuiTextfieldDropdown >
<tui-data-list-wrapper new tuiMultiSelectGroup [items]="items" />
<button appearance="accent" size="m" tuiButton tuiDropdownButton type="button" (click)="close()" > Done </button>
</ng-template>
</tui-textfield>
</label>
<label tuiLabel> Mobile sheet with options <tui-textfield multi tuiChevron tuiDropdownMobile="Select Pythons" >
<input tuiInputChip tuiSelectLike [placeholder]="sheet.length ? '' : 'Select Pythons'" [(ngModel)]="sheet" />
<tui-data-list-wrapper *tuiTextfieldDropdown new tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</label>
<label tuiLabel> Native MultiSelect <tui-textfield multi tuiChevron [identityMatcher]="identity" [stringify]="stringify" >
<select tuiMultiSelect [items]="[users]" [labels]="['Pythons']" [placeholder]="native.length ? 'and...' : 'Select Pythons'" [(ngModel)]="native" ></select>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);
    protected readonly users = this.items.map((name, index) => ({name, index}));

    protected writable: string[] = [];
    protected sheet: string[] = [];
    protected native: User[] = [{name: this.items[0] || '', index: 0}];

    protected readonly disabled = (item: string): boolean => !this.items.includes(item);
    protected readonly identity: TuiIdentityMatcher<User> = (a, b) => a.index === b.index;
    protected readonly stringify = ({name}: User): string => name;
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 19rem;
    flex-direction: column;
    gap: 1rem;
}
```

#### Table

**Template:**
```html
<table tuiTable>
<thead>
<tr>
<th tuiTh>Options</th>
</tr>
</thead>
<tbody tuiTbody>
<tr>
<td tuiTd>
<tui-textfield multi tuiChevron >
<label tuiLabel>Multi Select with dropdown</label>
<input placeholder="Pick from the list" tuiInputChip tuiSelectLike [formControl]="multiControl" [style.width.rem]="5" />
<tui-data-list-wrapper *tuiTextfieldDropdown new tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</td>
</tr>
<tr>
<td tuiTd>
<tui-textfield multi>
<label tuiLabel>Multi Select</label>
<input placeholder="Placeholder" tuiInputChip [formControl]="multiControl2" />
</tui-textfield>
</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);

    protected readonly multiControl = new FormControl(null, {
        validators: Validators.required,
    });

    protected readonly multiControl2 = new FormControl(null, {
        validators: Validators.required,
    });
}
```

**LESS:**
```less
:host {
    display: flex;
    inline-size: 19rem;
    flex-direction: column;
}
```

#### Virtual scroll

**Template:**
```html
<tui-textfield multi tuiChevron [content]="content" >
<label tuiLabel>Select items</label>
<input tuiInputChip tuiSelectLike [(ngModel)]="value" />
<ng-template tuiItem />
<ng-container *tuiTextfieldDropdown>
<tui-textfield #filter tuiTextfieldSize="m" [style.margin.rem]="0.25" >
<input placeholder="Type to filter" tuiTextfield />
</tui-textfield>
<cdk-virtual-scroll-viewport tuiScrollable [itemSize]="48" [style.height.px]="filtered().length * 48 + 8" [style.max-height.px]="200" [style.min-height.px]="56" >
<tui-data-list new tuiMultiSelectGroup >
<button *cdkVirtualFor="let item of filtered()" new tuiOption [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</ng-container>
</tui-textfield>
<p>
<button tuiButton type="button" (click)="onClick()" > Select bazillion </button>
</p>
```

**TypeScript:**
```ts
import {
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import {Component, computed, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiScrollable,
    TuiSelectLike,
    TuiTextfield,
    type TuiTextfieldComponent,
} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiInputChip,
        TuiMultiSelect,
        TuiScrollable,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild('filter')
    protected readonly filter?: TuiTextfieldComponent<string>;

    protected readonly items: string[] = Array.from({length: 3000}).map(
        (_, i) => `Item #${i}`,
    );

    protected value: string[] = [];

    protected readonly filtered = computed((value = this.filter?.value()) =>
        value
            ? this.items.filter((item) => TUI_DEFAULT_MATCHER(item, value))
            : this.items,
    );

    protected get content(): string {
        return this.value.length
            ? `Selected ${this.value.length} out of ${this.items.length}`
            : '';
    }

    protected onClick(): void {
        this.value = this.items.filter((_, i) => i < 2000);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

[tuiScrollable] {
    .scrollbar-hidden();
}
```

#### Stringify

**Template:**
```html
<label tuiLabel>
<tui-textfield multi tuiChevron [stringify]="stringify" >
<input tuiInputChip [placeholder]="value.length ? '' : 'Picking users'" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
<tui-data-list *tuiTextfieldDropdown tuiMultiSelectGroup >
<button *ngFor="let item of items" new tuiOption [value]="item.nickname" > {{ item.name }} ({{ item.nickname }}) </button>
</tui-data-list>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';
import {NgForOf} from '@angular/common';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiChevron,
        TuiDataList,
        TuiInputChip,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];

    protected items = [
        {nickname: 'a.inkin', name: 'Alex Inkin'},
        {nickname: 'r.sedov', name: 'Roman Sedov'},
    ];

    protected readonly stringify = (value: string): string =>
        this.items.find((item) => item.nickname === value)?.name ?? '';
}
```
