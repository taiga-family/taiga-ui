# InputChip

- **Package**: `KIT`
- **Type**: components

`InputChip` uses specifically modified Input to represent array of selectable items.

### Example

```html
<ng-template>
<tui-textfield multi [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [rows]="textfieldDoc.rows" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input placeholder="Enter" tuiInputChip [formControl]="control" [readonly]="controlDoc.readonly" [separator]="separator" [tuiDisabled]="controlDoc.disabled" [unique]="unique" />
<tui-input-chip *tuiItem />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [unique] | `boolean` | ability to enter unique or non-unique tags |
| [separator] | `string` | string or RegExp to separate tags |

### Usage Examples

#### Basic

`Textfield[multi]` is used to display array of items. By default they are presented as plain strings.

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
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = inject('Pythons' as any);
    protected readonly separator = /[\s,;]/;
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

Use `*tuiItem` directive to provide custom representation. You can use `tui-input-chip` out of the box or implement your own. The context is `TuiContext<{ item: T, index: number }>`

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
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = ['I', 'love', 'Angular'];
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

Individual tags can be disabled using `disabledItemHandler` , this would prevent them from being edited, removed or added. Note: keep in mind cleaner would still empty the control. If you want a different behavior, you can disable built-in cleaner and provide your own.

**Template:**
```html
<tui-textfield multi [disabledItemHandler]="handler" [style.width.rem]="19" [tuiTextfieldCleaner]="false" >
<input tuiInputChip [formControl]="control" /> @if (control.value.length > 2) { <button tabindex="-1" tuiButtonX (click)="control.setValue(this.required)" > Clear </button> } <tui-input-chip *tuiItem />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiButtonX, TuiInputChip],
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

`InputChip` can be used together with dropdown in many variations showcased below, from multiple values input with suggestions to multi-select without writable input.

**Template:**
```html
<label tuiLabel> Arbitrary strings with suggestions <tui-textfield multi>
<input placeholder="Type something" tuiInputChip [(ngModel)]="arbitrary" />
<tui-input-chip *tuiItem /> @if (items | tuiHideSelected | tuiFilterByInput; as items) { @if (items.length) { <ng-template tuiDropdown>
<tui-data-list-wrapper [items]="items" />
</ng-template> } } </tui-textfield>
</label>
<label tuiLabel> Only allowing items from the list and hiding values when not focused behind a custom content <tui-textfield #input multi [content]="!input.focused() && pythons.length ? `Selected ${pythons.length} out of ${items.length}` : ''" [disabledItemHandler]="disabled" >
<label tuiLabel>Select Pythons</label>
<input tuiInputChip [placeholder]="pythons.length ? '' : 'Type for suggestions'" [(ngModel)]="pythons" /> @if (!input.focused()) { <ng-template tuiItem /> } @if (items | tuiHideSelected | tuiFilterByInput; as items) { @if (items.length) { <ng-template tuiDropdown>
<tui-data-list-wrapper [items]="items" />
</ng-template> } } </tui-textfield>
</label>
<label tuiLabel> Using checkboxes in the dropdown and making the textfield non-writable <tui-textfield multi tuiChevron >
<label tuiLabel>Multi Select</label>
<input tuiInputChip tuiSelectLike [placeholder]="multi.length ? '' : 'Pick from the list'" [(ngModel)]="multi" />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</label>
<label tuiLabel> Conditional input in textfield <tui-textfield multi tuiChevron >
<label tuiLabel>Multi Select with if/else</label> @if (filter) { <input tuiInputChip [placeholder]="conditionalMulti.length ? '' : 'Pick from the list'" [(ngModel)]="conditionalMulti" /> } @else { <input tuiInputChip tuiSelectLike [placeholder]="conditionalMulti.length ? '' : 'Pick from the list'" [(ngModel)]="conditionalMulti" /> } <tui-input-chip *tuiItem />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="items" />
</tui-textfield>
</label>
<label tuiLabel>
<input tuiCheckbox type="checkbox" [(ngModel)]="filter" /> Toggle filter </label>
<label tuiLabel> Working with objects <tui-textfield multi tuiChevron [disabledItemHandler]="strings" [stringify]="stringify" >
<input tuiInputChip [placeholder]="objects.length ? '' : 'Picking objects'" [(ngModel)]="objects" />
<tui-input-chip *tuiItem />
<tui-data-list *tuiDropdown>
<tui-opt-group label="Pythons" tuiMultiSelectGroup > @for (user of users | tuiFilterByInput; track user) { <button tuiOption [value]="user" > {{ user.name }} </button> } </tui-opt-group>
<tui-opt-group label="Collaborators" tuiMultiSelectGroup > @for (user of more | tuiFilterByInput; track user) { <button tuiOption [value]="user" > {{ user.name }} </button> } </tui-opt-group>
</tui-data-list>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsString} from '@taiga-ui/cdk';
import {
    TuiCheckbox,
    TuiDataList,
    TuiFilterByInputPipe,
    TuiSelectLike,
    TuiTextfield,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiHideSelectedPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    imports: [
        FormsModule,
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
    styleUrl: './index.less',
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

You can customize many aspects of the component, from standard textfield options like icons and tooltips to changing the appearance of each individual chip.

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
import {TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiInputChip, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiHint, TuiIcon, TuiInputChip, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(['Keep', 'it', 'simple']);
}
```

#### Mask

Component can be used with Maskito to facilitate input masking.

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
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [MaskitoDirective, ReactiveFormsModule, TuiInputChip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
    protected readonly mask: MaskitoOptions = {mask: [/\d/, /\d/, /\d/]};
}
```

#### Direction

Component can be used together with RTL direction.

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
import {TuiInputChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {dir: 'rtl'},
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

You can improve UX on mobile devices in multiple ways, depending on your case.

**Template:**
```html
<label tuiLabel> Mobile dropdown with writable input <tui-textfield multi tuiChevron tuiDropdownMobile [disabledItemHandler]="disabled" >
<input placeholder="Type something" tuiInputChip [(ngModel)]="writable" /> @if (items | tuiFilterByInput; as items) { <ng-template let-close tuiDropdown >
<tui-data-list-wrapper tuiMultiSelectGroup [items]="items" />
<button appearance="accent" size="m" tuiButton tuiDropdownButton type="button" (click)="close()" > Done </button>
</ng-template> } </tui-textfield>
</label>
<label tuiLabel> Mobile sheet with options <tui-textfield multi tuiChevron tuiDropdownSheet >
<input tuiInputChip tuiSelectLike [placeholder]="sheet.length ? '' : 'Select Pythons'" [(ngModel)]="sheet" />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="[items]" [labels]="['Select Pythons']" />
</tui-textfield>
</label>
<label tuiLabel> Native MultiSelect <tui-textfield multi tuiChevron [identityMatcher]="identity" [stringify]="stringify" >
<select tuiMultiSelect [items]="[users]" [labels]="['Pythons']" [placeholder]="native.length ? 'and...' : 'Select Pythons'" [(ngModel)]="native" ></select>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile, TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiFilterByInputPipe, TuiSelectLike} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly index: number;
}

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiDropdownSheet,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<input placeholder="Pick from the list" tuiInputChip tuiSelectLike [formControl]="multiControl" />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="items" />
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
import {TuiSelectLike} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInputChip,
        TuiMultiSelect,
        TuiSelectLike,
        TuiTable,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

Using virtual scroll to improve UX when working with large amount of items.

**Template:**
```html
<tui-textfield multi tuiChevron [content]="content" >
<label tuiLabel>Select items</label>
<input tuiInputChip tuiSelectLike [(ngModel)]="value" />
<ng-template tuiItem />
<ng-container *tuiDropdown>
<tui-textfield #filter tuiTextfieldSize="m" [style.margin.rem]="0.25" >
<input placeholder="Type to filter" tuiInput />
</tui-textfield>
<cdk-virtual-scroll-viewport tuiScrollRef [itemSize]="42" [style.height.px]="filtered().length * 42 + 8" [style.max-height.px]="200" [style.min-height.px]="56" >
<tui-scroll-controls />
<tui-data-list tuiMultiSelectGroup>
<button *cdkVirtualFor="let item of filtered()" tuiOption [value]="item" > {{ item }} </button>
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
import {Component, computed, viewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiInput,
    TuiScrollControls,
    TuiScrollRef,
    TuiSelectLike,
    type TuiTextfieldComponent,
} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip, TuiMultiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        FormsModule,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiInput,
        TuiInputChip,
        TuiMultiSelect,
        TuiScrollControls,
        TuiScrollRef,
        TuiSelectLike,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly filter = viewChild<TuiTextfieldComponent<string>>('filter');

    protected readonly items: string[] = Array.from({length: 3000}).map(
        (_, i) => `Item #${i}`,
    );

    protected value: string[] = [];

    protected readonly filtered = computed((value = this.filter()?.value()) =>
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

#### Stringify

**Template:**
```html
<label tuiLabel>
<tui-textfield multi tuiChevron [stringify]="stringify" >
<input tuiInputChip [placeholder]="value.length ? '' : 'Picking users'" [(ngModel)]="value" />
<tui-input-chip *tuiItem />
<tui-data-list *tuiDropdown tuiMultiSelectGroup > @for (item of items; track $index) { <button tuiOption [value]="item.nickname" > {{ item.name }} ({{ item.nickname }}) </button> } </tui-data-list>
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

@Component({
    imports: [
        FormsModule,
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
